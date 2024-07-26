//App.js 

import React, { useState } from 'react'; 
import { Dropdown } from 'react-bootstrap'; 

const MultiSelectDropDown = (props: {
    options: string[]
}) => { 
	const [selectedOptions, setSelectedOptions] = 
		useState<string[]>([]); 
	const toggleLang = (option: string) => { 
		if (selectedOptions.includes(option)) { 
			setSelectedOptions( 
				selectedOptions.filter((item) => 
					item !== option)); 
		} else { 
			setSelectedOptions( 
				[...selectedOptions, option]); 
		} 
	}; 
	return ( 
		<div> 
			<Dropdown> 
				<Dropdown.Toggle /*variant="success"*/
								id="dropdown-basic" style={{
                                    padding: '8px 12px'
                                }}> 
					Select Options 
				</Dropdown.Toggle> 
				<Dropdown.Menu> 
					{props.options.map((option, index) => ( 
						<Dropdown.Item 
							key={index} 
							onClick={() => toggleLang(option)} 
							active={ 
								selectedOptions.includes(option)} 
						> 
							{option} 
						</Dropdown.Item> 
					))} 
				</Dropdown.Menu> 
			</Dropdown> 
			{/* <div> 
				<strong>Selected: </strong> 
					{selectedOptions.join(', ')} 
			</div>  */}
		</div> 
	); 
}; 
export default MultiSelectDropDown;
