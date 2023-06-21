'use client'
import {Box, styled} from "@mui/material";


const StyledBox = styled(Box)`
    background-color: #fff;
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;
const Header = () => {
    return (
        <StyledBox>
           <p>gdgd</p>
        </StyledBox>
    )
}

export default Header
