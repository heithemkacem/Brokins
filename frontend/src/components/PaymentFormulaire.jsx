import { useState } from 'react';
import FormulairePayment from './FormulairePayment';
function App() {
	const [showItem, setShowItem] = useState(false);
	return (
		<div className='App'>
			<h1>The Contract Store</h1>
			{showItem ? (
				<FormulairePayment />
			) : (
				<>
					<h3>$10.00</h3>
					<button onClick={() => setShowItem(true)}>Purchase Contract</button>
				</>
			)}
		</div>
	);
}

export default App;