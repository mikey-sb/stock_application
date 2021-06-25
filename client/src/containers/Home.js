const Home = ({allStock}) => {
    console.log(allStock)
    return (
        <>
        
        
        <div className="home-container">
           <h1>HOME</h1>

           {allStock["Meta Data"]["1. Information"]}

        </div>
        
        </>
    )
}

export default Home