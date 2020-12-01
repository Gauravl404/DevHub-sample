import React,{Fragment,useState,useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { toast } from 'react-toastify';


//layout components


import MyDrawer from './MyDrawer'



const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(5),
      },
    },
  }));


const Dashboard =  ({setAuth})=> {

    const classes = useStyles();

    const [name, setName] = useState("");

    async function getName() {
        try {
            
          
            const responce =  await fetch("http://localhost:5000/dashboard/",{
              method:"GET",
              headers:{token:localStorage.token},
              
            });
            const parseRes = await responce.json();
            
           // console.log(parseRes);
           setName(parseRes.user_name);
      
      
            
          } catch (err) {
            console.error(err.message);
            
          }
    }

    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        toast.success("Logged Out Successfully");
        setAuth(false);
        
    }

    useEffect(() => {
        getName();
        
    },[]);
    
    return (
        <Fragment>
            <MyDrawer logout = {logout} name={name}/>
            
            
            
        </Fragment>
    )
}
export default Dashboard;

