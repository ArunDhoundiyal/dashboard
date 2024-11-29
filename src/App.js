import {useEffect, useState} from 'react'
import axios from 'axios'
import {ThreeCircles} from 'react-loader-spinner'
import {Container, Header, ChecklistSystem, ToggleButton, DashboardHeading, ListContainer, ListItem, ChecklistRules, Span, Condition, ErrorMsg} from './styledComponents'
import { MdOutlineWbSunny } from "react-icons/md";
import { LuMoon } from "react-icons/lu";

const App = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [loader, setLoader] = useState(false) 
  const [toggle, setToggle] = useState(false)
  console.log(toggle)
  useEffect(()=>{
    const fetchDashboardData = async() => {
      setLoader(true)
      setError(false)
      try {
        const response = await axios.get('https://transition-computing-backend-assignment-q78x.onrender.com')
        const {data, status} = response 
        if (status === 200){
          setData(data)
        }
        else{
          setError(true)
          setErrorMsg('Data is not being fetched from API due to some reason kindly try it again after some time !')
        }
      } catch (error) {
        setError(true)
        setErrorMsg(`Error Message: ${error.message}`)
      }
      finally{
        setLoader(false)
      }

    }
    fetchDashboardData()
  }, [])

  const displayDashboard = () => {
    if (loader){
      return (<ThreeCircles
        visible={true}
        height="50"
        width="50"
        color="#4fa94d"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        />)

    }
    if (error){
      return(
        <ErrorMsg>{errorMsg}</ErrorMsg>
      )
    }
    return(
    <>
    <DashboardHeading toggle={toggle}>Dashboard Data:📃</DashboardHeading>
      <ListContainer toggle={toggle}>
      {
        data.map((eachData, index) => (
          <ListItem toggle={toggle} key={index}>
            <ChecklistRules toggle={toggle}>
            Checklist rule: <Span toggle={toggle}>{eachData.checkListName}</Span>
            </ChecklistRules>
            <Condition toggle={toggle}> 
              Condition: <Span toggle={toggle}>{eachData.checklistRules}</Span>
            </Condition>
          
          </ListItem>
        ))
      }
      </ListContainer>
    </>
    )

  }

  return(
    <Container toggle={toggle} >
      <Header toggle={toggle}>
        <ChecklistSystem toggle={toggle}>
        Checklist System 🚀
        </ChecklistSystem>
        <ToggleButton toggle={toggle} onClick={()=>{setToggle(!toggle)}}>
          {toggle ? <LuMoon/> :<MdOutlineWbSunny />}
        
        </ToggleButton>
      </Header>
      {
        displayDashboard()
      }
    </Container>

  )
}

export default App