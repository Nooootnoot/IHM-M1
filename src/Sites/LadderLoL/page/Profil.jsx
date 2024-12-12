import {useEffect, useState} from "react";
import {getProfil} from "../db/account.js";
import {Flex, Typography} from "antd";
import axios from "axios";
import '../css/Profil.css';
import RowMatchProfil from "../components/RowMatchProfil.jsx";
import {useLoaderData} from "react-router-dom";

const tempData = {
    nameWithTag: "Matxs#KCORP",
    puuid: "qSGKI1dTw93zS6UiRR2q47VOKiYlRy7Go9hPMgsUvchK95BumOrASTTj9wCPvTpUfpV_MkxBEKC9Jw",
    history: [{
        gameId: "EUW_16836263891",
        teamWinnerId: 100,
        gamemode: 'Classé en solo/duo',
        gameDuration: 2349,
        participants: [
            {
                puuid: "qSGKI1dTw93zS6UiRR2q47VOKiYlRy7Go9hPMgsUvchK95BumOrASTTj9wCPvTpUfpV_MkxBEKC9Jw",
                summonerName: "Vapeur de prout#prout",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'TOP',
                teamId: 100
            },{
                puuid: "test",
                summonerName: "Matxs#KCORP",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'JGL',
                teamId: 100
            },{
                puuid: "test",
                summonerName: "Matxs#KCORP",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'MID',
                teamId: 100
            },{
                puuid: "test",
                summonerName: "Matxs#KCORP",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'ADC',
                teamId: 100
            },{
                puuid: "test",
                summonerName: "Matxs#KCORP",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'SUP',
                teamId: 100
            },{
                puuid: "test",
                summonerName: "Matxs#KCORP",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'TOP',
                teamId: 200
            },{
                puuid: "test",
                summonerName: "Matxs#KCORP",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'JGL',
                teamId: 200
            },{
                puuid: "test",
                summonerName: "Matxs#KCORP",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'MID',
                teamId: 200
            },{
                puuid: "test",
                summonerName: "Matxs#KCORP",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'ADC',
                teamId: 200
            },{
                puuid: "test",
                summonerName: "Matxs#KCORP",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'SUP',
                teamId: 200
            }
        ]
    },{
        gameId: "EUW_16836263891",
        teamWinnerId: 100,
        gamemode: 'Classé en solo/duo',
        gameDuration: 2349,
        participants: [
            {
                puuid: "qSGKI1dTw93zS6UiRR2q47VOKiYlRy7Go9hPMgsUvchK95BumOrASTTj9wCPvTpUfpV_MkxBEKC9Jw",
                summonerName: "Matxs#KCORP",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'TOP',
                teamId: 100
            },{
                puuid: "test",
                summonerName: "Matxs#KCORP",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'JGL',
                teamId: 100
            },{
                puuid: "test",
                summonerName: "Matxs#KCORP",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'MID',
                teamId: 100
            },{
                puuid: "test",
                summonerName: "Matxs#KCORP",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'ADC',
                teamId: 100
            },{
                puuid: "test",
                summonerName: "Matxs#KCORP",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'SUP',
                teamId: 100
            },{
                puuid: "test",
                summonerName: "Matxs#KCORP",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'TOP',
                teamId: 200
            },{
                puuid: "test",
                summonerName: "Matxs#KCORP",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'JGL',
                teamId: 200
            },{
                puuid: "test",
                summonerName: "Matxs#KCORP",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'MID',
                teamId: 200
            },{
                puuid: "test",
                summonerName: "Matxs#KCORP",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'ADC',
                teamId: 200
            },{
                puuid: "test",
                summonerName: "Matxs#KCORP",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'SUP',
                teamId: 200
            }
        ]
    },{
        gameId: "EUW_16836263891",
        teamWinnerId: 100,
        gamemode: 'Classé en solo/duo',
        gameDuration: 2349,
        participants: [
            {
                puuid: "qSGKI1dTw93zS6UiRR2q47VOKiYlRy7Go9hPMgsUvchK95BumOrASTTj9wCPvTpUfpV_MkxBEKC9Jw",
                summonerName: "Matxs#KCORP",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'TOP',
                teamId: 100
            },{
                puuid: "test",
                summonerName: "Matxs#KCORP",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'JGL',
                teamId: 100
            },{
                puuid: "test",
                summonerName: "Matxs#KCORP",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'MID',
                teamId: 100
            },{
                puuid: "test",
                summonerName: "Matxs#KCORP",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'ADC',
                teamId: 100
            },{
                puuid: "test",
                summonerName: "Matxs#KCORP",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'SUP',
                teamId: 100
            },{
                puuid: "test",
                summonerName: "Matxs#KCORP",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'TOP',
                teamId: 200
            },{
                puuid: "test",
                summonerName: "Matxs#KCORP",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'JGL',
                teamId: 200
            },{
                puuid: "test",
                summonerName: "Matxs#KCORP",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'MID',
                teamId: 200
            },{
                puuid: "test",
                summonerName: "Matxs#KCORP",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'ADC',
                teamId: 200
            },{
                puuid: "test",
                summonerName: "Matxs#KCORP",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'SUP',
                teamId: 200
            }
        ]
    },{
        gameId: "EUW_16836263891",
        teamWinnerId: 100,
        gamemode: 'Classé en solo/duo',
        gameDuration: 2349,
        participants: [
            {
                puuid: "qSGKI1dTw93zS6UiRR2q47VOKiYlRy7Go9hPMgsUvchK95BumOrASTTj9wCPvTpUfpV_MkxBEKC9Jw",
                summonerName: "Matxs#KCORP",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'TOP',
                teamId: 100
            },{
                puuid: "test",
                summonerName: "Matxs#KCORP",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'JGL',
                teamId: 100
            },{
                puuid: "test",
                summonerName: "Matxs#KCORP",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'MID',
                teamId: 100
            },{
                puuid: "test",
                summonerName: "Matxs#KCORP",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'ADC',
                teamId: 100
            },{
                puuid: "test",
                summonerName: "Matxs#KCORP",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'SUP',
                teamId: 100
            },{
                puuid: "test",
                summonerName: "Matxs#KCORP",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'TOP',
                teamId: 200
            },{
                puuid: "test",
                summonerName: "Matxs#KCORP",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'JGL',
                teamId: 200
            },{
                puuid: "test",
                summonerName: "Matxs#KCORP",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'MID',
                teamId: 200
            },{
                puuid: "test",
                summonerName: "Matxs#KCORP",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'ADC',
                teamId: 200
            },{
                puuid: "test",
                summonerName: "Matxs#KCORP",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'SUP',
                teamId: 200
            }
        ]
    },{
        gameId: "EUW_16836263891",
        teamWinnerId: 100,
        gamemode: 'Classé en solo/duo',
        gameDuration: 2349,
        participants: [
            {
                puuid: "qSGKI1dTw93zS6UiRR2q47VOKiYlRy7Go9hPMgsUvchK95BumOrASTTj9wCPvTpUfpV_MkxBEKC9Jw",
                summonerName: "Matxs#KCORP",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'TOP',
                teamId: 100
            },{
                puuid: "test",
                summonerName: "Matxs#KCORP",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'JGL',
                teamId: 100
            },{
                puuid: "test",
                summonerName: "Matxs#KCORP",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'MID',
                teamId: 100
            },{
                puuid: "test",
                summonerName: "Matxs#KCORP",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'ADC',
                teamId: 100
            },{
                puuid: "test",
                summonerName: "Matxs#KCORP",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'SUP',
                teamId: 100
            },{
                puuid: "test",
                summonerName: "Matxs#KCORP",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'TOP',
                teamId: 200
            },{
                puuid: "test",
                summonerName: "Matxs#KCORP",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'JGL',
                teamId: 200
            },{
                puuid: "test",
                summonerName: "Matxs#KCORP",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'MID',
                teamId: 200
            },{
                puuid: "test",
                summonerName: "Matxs#KCORP",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'ADC',
                teamId: 200
            },{
                puuid: "test",
                summonerName: "Matxs#KCORP",
                spell1ID: "SummonerFlash",
                spell2ID: "SummonerTeleport",
                perks: {
                    statPerks: {
                        defense: 5001,
                        flex: 5008,
                        offense: 5005
                    },
                    styles: [
                        {
                            description: "primaryStyle",
                            selections: [
                                {
                                    perk: 8010,
                                    var1: 0,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 9111,
                                    var1: 232,
                                    var2: 60,
                                    var3: 0
                                },
                                {
                                    perk: 9105,
                                    var1: 15,
                                    var2: 30,
                                    var3: 0
                                },
                                {
                                    perk: 8299,
                                    var1: 216,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8000
                        },
                        {
                            description: "subStyle",
                            selections: [
                                {
                                    perk: 8473,
                                    var1: 679,
                                    var2: 0,
                                    var3: 0
                                },
                                {
                                    perk: 8242,
                                    var1: 144,
                                    var2: 0,
                                    var3: 0
                                }
                            ],
                            style: 8400
                        }
                    ]
                },
                kills: 11,
                deaths: 6,
                assists: 3,
                cs: 184,
                dpm: 846,
                vision: 27,
                championId: 58,
                championName: 'Kayn',
                role: 'SUP',
                teamId: 200
            }
        ]
    }],
    profileIconId: "6740",
    tierSoloq: "EMERALD",
    rankSoloq: "IV",
    scoreSoloq: 2168,
    leaguePointsSoloq: 68,
    winsSoloq: 5,
    lossesSoloq: 1,
    hotStreakSoloq: true,
    tierFlex: "EMERALD",
    rankFlex: "I",
    scoreFlex: 2480,
    leaguePointsFlex: 80,
    winsFlex: 3,
    lossesFlex: 6,
    hotStreakFlex: false,
    mostPlayedChampion: "Kayn"
}

export default function Profil() {
    const [data, setData] = useState(null);
    const [version, setVersion] = useState('');
    const puuid = useLoaderData();

    useEffect(() => {
        getProfil(puuid).then(data => {
            setData(data);
        })

        axios.get('https://ddragon.leagueoflegends.com/api/versions.json').then((response) => {
            setVersion(response.data[0])
        })
    }, []);

    return (
        <>
            {
                version && <Flex
                    vertical
                    justify="start"
                >
                    <Flex
                        style={{
                            width: '100%',
                            height: '455px',
                        }}
                        className="banner-container"
                    >
                        <img
                            src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + tempData?.mostPlayedChampion + "_0.jpg"}
                            alt="icon"
                            style={{
                                width: "100%",
                                height: "650px",
                                transform: "translateY(-200px)",
                                position: "absolute",
                                objectFit: "cover",
                            }}
                        />
                    </Flex>
                    <Flex
                        vertical
                        style={{
                            margin: "0 16em",
                            transform: "translateY(-80px)",
                        }}
                    >
                        <Flex
                            align="center"
                            gap={5}
                        >
                            <img
                                src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/profileicon/${tempData.profileIconId}.png`}
                                style={{
                                    width: "100px",
                                    height: "100px",
                                    borderRadius: "50%",
                                    border: "4px solid white",
                                }}
                            />
                            <Typography.Text
                                style={{
                                    color: "white",
                                    fontWeight: "bold",
                                    fontSize: "2.4rem",
                                }}
                            >
                                {tempData.nameWithTag}
                            </Typography.Text>
                        </Flex>
                        <Flex
                            vertical
                            style={{
                                marginTop: "4em"
                            }}
                            gap={5}
                        >
                            <Typography.Title>Historique</Typography.Title>
                            {
                                tempData.history.map((match, index) => (
                                    <>
                                        <RowMatchProfil
                                            key={index}
                                            match={match}
                                            version={version}
                                            puuid={puuid}
                                        />
                                    </>
                                ))
                            }
                        </Flex>
                    </Flex>
                </Flex>
            }
        </>
    )
}