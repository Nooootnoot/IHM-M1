import {Flex, Typography} from "antd";
import {getPerkImage} from "../db/utils.js";
import {useEffect, useState} from "react";

export default function RowMatchProfil({match, version, puuid}){
    const user = match.participants.find(participant => participant.puuid === puuid)

    const [perkPrimaryStyleIcon, setPerkPrimaryStyleIcon] = useState(undefined);
    const [perkSecondaryStyleIcon, setPerkSecondaryStyleIcon] = useState(undefined);

    useEffect(() => {
        getPerkImage(user.perks.styles[0].style, version).then(icon => {
            setPerkPrimaryStyleIcon(icon);
        })

        getPerkImage(user.perks.styles[1].style, version).then(icon => {
            setPerkSecondaryStyleIcon(icon);
        })
    }, [])

    const formatGameDuration = (gameDuration) => {
        const minutes = Math.floor(gameDuration / 60);
        const seconds = gameDuration % 60;
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    return (
        <Flex
            align="center"
            justify="space-between"
            style={{
                backgroundColor: "#4c4c60",
                padding: "10px",
                borderRadius: "5px",
            }}
        >
            <Flex
                vertical
                justify="space-between"
            >
                <Typography.Text
                    style={{
                        color: "#e7e7ef",
                        borderBottom: "1px solid #9E9EB1",
                    }}
                >
                    {match.gamemode}
                </Typography.Text>
                <Flex
                    vertical
                >
                    <Typography.Text
                        style={{
                            color: "#a3a3ff",
                            fontSize: "0.8rem",
                        }}
                    >
                        {match.teamWinnerId === user.teamId ? "Victoire" : "Défaite"}
                    </Typography.Text>
                    <Typography.Text
                        style={{
                            color: "#bdbde1",
                            fontSize: "0.8rem",
                        }}
                    >
                        {formatGameDuration(match.gameDuration)}
                    </Typography.Text>
                </Flex>
            </Flex>
            <Flex
                gap={2}
                align="center"
            >
                <img
                    src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${user.championName}.png`}
                    alt={"icon"}
                    style={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "5px"
                    }}
                />
                <Flex
                    vertical
                    gap={2}
                >
                    <img
                        src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${user.spell1ID}.png`}
                        alt={"icon"}
                        style={{
                            width: "35px",
                            height: "35px",
                            borderRadius: "5px"
                        }}
                    />
                    <img
                        src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${user.spell2ID}.png`}
                        alt={"icon"}
                        style={{
                            width: "35px",
                            height: "35px",
                            borderRadius: "5px"
                        }}
                    />
                </Flex>
            </Flex>
            <Flex>
                {
                    perkPrimaryStyleIcon && perkSecondaryStyleIcon &&
                    <>
                        <img
                            src={`https://ddragon.leagueoflegends.com/cdn/img/${perkPrimaryStyleIcon}`}
                            alt={"icon"}
                            style={{
                                height: "30px",
                                width: "30px",
                                borderRadius: "50%",
                                backgroundColor: "#242424",
                                padding: "0.1em"
                            }}
                        />
                        <img
                            src={`https://ddragon.leagueoflegends.com/cdn/img/${perkSecondaryStyleIcon}`}
                            alt={"icon"}
                            style={{
                                height: "20px",
                                width: "20px",
                                borderRadius: "50%",
                                backgroundColor: "#242424",
                                padding: "0.1em",
                                transform: "translate(-60%, 80%)",
                            }}
                        />
                    </>
                }
            </Flex>
            <Flex
                vertical
            >
                <Typography.Text
                    style={{
                        fontWeight: "bold",
                        fontSize: "1.2rem",
                        color: "white"
                    }}
                >
                    {user.kills} / <span style={{color: "red"}}>{user.deaths}</span> / {user.assists}
                </Typography.Text>
                <Typography.Text
                    style={{
                        fontSize: "0.9rem",
                        color: "#9E9EB1"
                    }}
                >
                    {((user.kills + user.assists) / user.deaths).toFixed(2)}:1 KDA
                </Typography.Text>
            </Flex>
            <Flex>
                <Flex
                    vertical
                >
                    <Typography.Text
                        style={{
                            color: "#9E9EB1"
                        }}
                    >
                        cs {user.cs}
                    </Typography.Text>
                    <Typography.Text
                        style={{
                            color: "#9E9EB1"
                        }}
                    >
                        vision {user.vision}
                    </Typography.Text>
                </Flex>
                <Flex
                    vertical
                >
                    <Typography.Text
                        style={{
                            color: "#9E9EB1"
                        }}
                    >
                        dpm {user.dpm}
                    </Typography.Text>
                </Flex>
            </Flex>
            <Flex
                style={{
                    width: "400px",
                    height: "50px",
                    backgroundColor: "red",
                }}
            >
                <div></div>
            </Flex>
        </Flex>
    )
}