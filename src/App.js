import { Route, Routes } from 'react-router-dom'
import './App.css'
import Menu from './Menu/Menu'
import Companies from './SideBar/components/Companies'
import Contragets from './SideBar/components/Contragets'
import CreditSpec from './SideBar/components/CreditSpec'
import Documents from './SideBar/components/Documents'
import Guarantors from './SideBar/components/Guarantors'
import Jobs from './SideBar/components/Jobs'
import MortgagedProperty from './SideBar/components/MortgagedProperty'
import './scss/app.scss'
function App() {
	return (
		<div className='App'>
			<Menu />

			<div className='wrapper'>
				<Routes>
					<Route path='/documents' element={<Documents />} />
					<Route path='/jobs' element={<Jobs />} />
					<Route path='/companies' element={<Companies />} />
					<Route path='/mortgaged' element={<MortgagedProperty />} />
					<Route path='/contragets' element={<Contragets />} />
					<Route path='/creditSpec' element={<CreditSpec />} />
					<Route path='/guarantors' element={<Guarantors />} />
				</Routes>
			</div>
		</div>
	)
}

export default App
