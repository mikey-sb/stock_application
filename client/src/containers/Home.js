import StockChart from '../components/StockChart'
import CandleStickChart from '../components/CandleStickChart'
import styled from "styled-components";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";


const Home = ({allStock, theme, setTheme}) => {
    console.log(allStock)

      function changeTheme() {
          console.log(theme)
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };
    
    const Page = styled.div`
    background-color: ${theme => theme.theme.pageBackground};
    transition: all .5s ease;
    `;

    const Title = styled.h1`
    color: ${theme => theme.theme.titleColor};
    transition: all .5s ease;
    `;

    const Toggle = styled.button`
    cursor: pointer;
    height: 50px;
    width: 50px;   
    border-radius: 50%;
    border: none;
    background-color: ${theme => theme.theme.titleColor};
    color: ${theme => theme.theme.pageBackground};
    &:focus {
        outline: none;
    }
    transition: all .5s ease;
    `;

    const icon = theme.theme === "light" ? <HiMoon size={40} /> : <CgSun size={40} />;



    return (
        <>
        
        
        <div className="home-container">
           <Page>
           <h1>HOME</h1>
           <Title> Stock App</Title>
           <Toggle onClick={changeTheme}>
                    {icon}
                </Toggle>

           < StockChart allStock={allStock} />
           
           < CandleStickChart allStock={allStock} />
           <h1>Home</h1>
           </Page>

        </div>
        
        
        </>
    )
}

export default Home




