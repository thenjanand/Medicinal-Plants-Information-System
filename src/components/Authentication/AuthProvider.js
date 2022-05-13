import React,{createContext,useEffect,useState} from 'react';
import {auth} from '../../firebase'
import {useHistory} from 'react-router-dom'

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {

	const history = useHistory()

	const [user, setUser] = useState()

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			setUser(user);
		});
	}, [])

	const logout = () => {
		auth.signOut().then(()=>{
			setUser(null)
			history.push("/login")
		}).catch((err) =>{
			console.log(err)
		})
	}

	return <AuthContext.Provider value={{user, logout}}>
	{children}
	</AuthContext.Provider>
}
