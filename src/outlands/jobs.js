const CLIENT = [
  ["Civilian","Laborer/Professional,Courier/Wayfinder,Shop/Buisness Owner,Artist/Writer,Doctor/Alchemist/Mechanic"],
  ["Criminal","Drug Dealer/Supplier,Mercenary/Thug,Fence/Gambler,Spy/Informant,Smuggler/Thief,Pirate/Crime Boss"],
  ["Political","Executive/Diplomat,Accountant/Pilot,Revolutionary/Refugee,Cop/Detective,Agent/Scientist,Governor/Representative"],
  ["Strange","Occult Collector,Mystic/Cultist,Disease/Natural Disaster,Cosmic Site,Renegade Elemental,Anomaly"]
]

const WORK = [
  ["Charm","Negotiate,Establish/Improve Relations,Calm/Stir Up,Broadcast/Record"],
  ["Force","Escort/Security,Raid/Defend,Capture/Tag"],
  ["Stealth","Stalking/Surveillance,Sabotage,Burglary/Heist,Lift/Plant,Impersonate/Trick,Blackmail/Discredit"],
  ["Wits","Locate/Hide,Infect/Cure,Hack/Download,Smuggle/Courier,Engineer/Build"]
] 

const JOBS = {
  clients : CLIENT.map(c => [c[0],...c[1].split(",")]),
  work : WORK.map(w => [w[0],...w[1].split(",")]),
}

export {JOBS}