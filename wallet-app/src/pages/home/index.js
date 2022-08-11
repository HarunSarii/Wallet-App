import React from 'react';
import { makeStyles } from '@mui/styles';
import { useWeb3React } from '@web3-react/core';
import { injected } from '../../components/connectors/injected';
import { Box, Button, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import Tooltip from '@mui/material/Tooltip';

const useStyles = makeStyles({
    connectButton: {
        backgroundColor: 'gray',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 1px 1px 1px rgba(0, 0, 0, .1)',
        height: 48,
        padding: '0 30px',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    deactivateButton: {
        padding: 5,
        fontSize: 12,
        backgroundColor: "#d6d6cd",
        border: 0,
        marginTop: 20
    },
    buttonContainer: {
        margin: 20,
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
    },
    account: {
        padding: 20,
        height: "2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10
    },
    container: {
        backgroundColor: "#fff",
        minWidth: "30%",
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .1)',
        marginTop: 30
    },
    logo: {
        height: '1rem',
        width: "1rem"
    },
    logoBox: {
        marginLeft: 30,
        paddingRight: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        height: '3rem',
        display: 'flex',
        justifyContent: 'space-between',
        paddingLeft: 40,
        paddingRight: 40,
        margin: 20,
        borderBottom: "1px solid gray",
        color: '#463872',
    },
    typography: {
        color: "#66C7D2"
    }

})

const Home = () => {
    const classes = useStyles();
    const { active, account, activate, deactivate } = useWeb3React();

    const connect = async () => {
        try {
            await activate(injected);
        } catch (ex) {
            console.log(ex)
        }
    }

    const disconnect = () => {
        try {
            deactivate();
        } catch (ex) {
            console.log(ex)
        }
    }

    return (
        <Box className={classes.container} >
            <Box className={classes.account}>
                {account}
            </Box>
            <Box className={classes.headerText}>
                <Typography sx={{ fontWeight: 700 }}  >
                    Connect to a wallet
                </Typography>
                <Tooltip title="deactivate" placement="top">
                    <CloseIcon style={{ cursor: "pointer", color: 'black' }} onClick={disconnect} />
                </Tooltip>
            </Box>
            <Box className={classes.buttonContainer} >
                <Button className={classes.connectButton} onClick={connect} >
                    <Typography className={classes.typography}>
                        Metamask
                    </Typography>
                    <Box className={classes.logoBox}>
                        <img className={classes.logo} src="https://seeklogo.com/images/M/metamask-logo-09EDE53DBD-seeklogo.com.png" alt='Metamask logo' />
                    </Box>
                </Button>
                <Button className={classes.connectButton} onClick={connect}  >
                    <Typography className={classes.typography}>
                        TrustWallet
                    </Typography>
                    <Box className={classes.logoBox}>
                        <img className={classes.logo} src="https://trustwallet.com/assets/images/media/assets/TWT.png" alt='TrustWallet logo' />
                    </Box>
                </Button>
                <Button className={classes.connectButton} onClick={connect} >
                    <Typography className={classes.typography}>
                        MathWallet
                    </Typography>
                    <Box className={classes.logoBox}>
                        <img className={classes.logo} src="http://medishares.oss-cn-hongkong.aliyuncs.com/logo/math/Logo_Icon_black.png" alt='MathWallet logo' />
                    </Box>
                </Button>
                <Button className={classes.connectButton} onClick={connect} >
                    <Typography className={classes.typography}>
                        TokenPocket
                    </Typography>
                    <Box className={classes.logoBox}>
                        <img className={classes.logo} src="https://s2.coinmarketcap.com/static/img/coins/200x200/5947.png" alt='TokenPocket logo' />
                    </Box>
                </Button>
                <Button className={classes.connectButton} onClick={connect} >
                    <Typography className={classes.typography}>
                        WalletConnect
                    </Typography>
                    <Box className={classes.logoBox}>
                        <img className={classes.logo} src="https://seeklogo.com/images/W/walletconnect-logo-EE83B50C97-seeklogo.com.png" alt='wallet connect logo' />
                    </Box>
                </Button>
                <Button className={classes.connectButton} onClick={connect} >
                    <Typography className={classes.typography}>
                        Binance Chain Wallet
                    </Typography>
                    <Box className={classes.logoBox}>
                        <img className={classes.logo} src="https://lh3.googleusercontent.com/rs95LiHzLXNbJdlPYwQaeDaR_-2P9vMLBPwaKWaQ3h9jNU7TOYhEz72y95VidH_hUBqGXeia-X8fLtpE8Zfnvkwa=w128-h128-e365-rj-sc0x00ffffff" alt='Binance Chain Wallet logo' />
                    </Box>
                </Button>
                <Button
                    className={classes.deactivateButton}
                    sx={{ backgroundColor: active ? '#ff5656' : '#88b2e8', color: 'black', fontWeight: 600, margin: 2 }}
                    onClick={disconnect}
                >
                    Deactivate
                </Button>
            </Box>
        </Box>
    )
}

export default Home