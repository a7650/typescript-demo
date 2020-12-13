import ActionQueue from './actionQueue'
import { NormalAttack, Skill } from './skill'

export interface IPersonProperties {
  name: string
  speed: number
  hp: number
  mp: number
  totalHp: number
  totalMp: number
  attackValue: number
  armorValue: number
  skills: {
    [propName: string]: Skill
  }
}

interface IAttackReceiveRecord {
  from: BasePerson
  skill: Skill
  realDamage: number
}

export default class BasePerson {
  public readonly name: string
  public heroProperties: IPersonProperties
  public actionQueue: ActionQueue
  public attackReceiveRecords: Array<IAttackReceiveRecord>
  public isFightingStatus = false
  private fightingTimer: number | null = null
  constructor(personOptions: Partial<IPersonProperties>) {
    const defaultProperties: IPersonProperties = {
      name: '__name__',
      speed: 2,
      hp: 100,
      mp: 100,
      totalHp: 100,
      totalMp: 100,
      attackValue: 10,
      armorValue: 0,
      skills: {}
    }
    this.heroProperties = Object.assign({}, defaultProperties, personOptions)
    this.name = this.heroProperties.name
    this.actionQueue = new ActionQueue(this)
    this.learnSkill(new NormalAttack())
    this.attackReceiveRecords = []
  }
  get isDie(): boolean {
    return this.heroProperties.hp <= 0
  }
  private processAttackRecords(record?: IAttackReceiveRecord): void {
    if (record) {
      this.attackReceiveRecords.push(record)
    }
    this.fightingTimer && clearTimeout(this.fightingTimer)
    this.fightingTimer = setTimeout(() => {
      this.attackReceiveRecords = []
      this.isFightingStatus = false
    }, 5000)
    this.isFightingStatus = true
  }
  normalAttack(target: BasePerson): void {
    this.useSkill(NormalAttack.NORMAL_ATTACK_NAME, target)
  }
  attackReceived(from: BasePerson, value: number, skill: Skill): void {
    if (this.isDie || value < 0) return
    const realDamage = Math.max(1, value - this.heroProperties.armorValue)
    this.heroProperties.hp = Math.max(0, this.heroProperties.hp - realDamage)
    this.processAttackRecords({ from, skill, realDamage })
    if (this.heroProperties.hp <= 0) {
      this.dieHook(from)
    }
  }
  recoverHealth(value: number): void {
    if (value < 0) return
    this.heroProperties.hp = Math.min(
      this.heroProperties.totalHp,
      this.heroProperties.hp + value
    )
  }
  useSkill(skillName: string, target: BasePerson): void {
    const skill = this.heroProperties.skills[skillName]
    if (skill) {
      const skillInvoker = skill.invoker
      const skillCb = skill.skillCb
      this.actionQueue.add(
        () => {
          if (this.heroProperties.mp < skill.mpSpend) {
            return
          }
          this.heroProperties.mp = this.heroProperties.mp - skill.mpSpend
          skillInvoker(this, target)
          return true
        },
        () => {
          this.processAttackRecords()
          skillCb && skillCb(this, target)
        }
      )
    }
  }
  learnSkill(skill: Skill): void {
    this.heroProperties.skills[skill.name] = skill
  }
  dieHook(from: BasePerson): void {
    console.log('died , by ' + from.name)
  }
}
