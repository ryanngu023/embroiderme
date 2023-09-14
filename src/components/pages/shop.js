import React, {useState, useEffect} from "react";
import SortFilter from "../SortFilter.js";
import ProductCard from "../ProductCard.js";

export default function Shop(props) {
    const [search, setSearch] = useState('');
    const [sortOpen, setSortOpen] = useState(false);
    const [checkedState, setCheckedState] = useState(
        [
            { id: 1, name: 'popularcheck', title: 'Popular', ischecked: false},
            { id: 2, name: 'newrelease', title: 'New Release', ischecked: false},
            { id: 3, name: 'nnoriginals', title: 'NN Originals', ischecked: false},
            { id: 4, name: 'contrasting', title: 'Contrasting Design', ischecked: false},
            { id: 5, name: 'mangapanel', title: 'Manga Panel', ischecked: false},
            { id: 6, name: 'anime', title: 'Anime', ischecked: false},
            { id: 7, name: 'sale', title: 'Sale', ischecked: false},
            { id: 8, name: 'limited', title: 'Limited', ischecked: false}
        ]
    );
    const [sortCheckedState, setSortCheckedState] = useState(
        [
            { id: 1, name: 'lowesttohighest', title: 'Lowest to Highest Price', ischecked: false},
            { id: 2, name: 'highesttolowest', title: 'Highest to Lowest Price', ischecked: false}
        ]
    )

    function handleSortOpen(event) {
        event.preventDefault();
        setSortOpen(!sortOpen);
    };

    function handleChange(event) {
        setSearch(event.target.value);
    }

    function handleSortCheckChange(event) {
        let resultSortArray = sortCheckedState.map((checkbox) => {
            if(checkbox.id == event.target.dataset.id) {
                checkbox.ischecked = !checkbox.ischecked;
                return checkbox;
            } else {
                checkbox.ischecked = false;
                return checkbox;
            }
        })
        setSortCheckedState(resultSortArray);
    }

    let sortArray = sortCheckedState.map((item, index) => {
        return (
            <div key={index}>
                <input type='radio' data-id={item.id} onChange={handleSortCheckChange} checked={item.ischecked} name={item.name} />
                <label htmlFor={item.name} className="bold">{item.title}</label>
            </div>
        )
    })

    function handleCheckChange(event) {
        let resultArray = checkedState.map((checkbox) => {
            if(checkbox.id == event.target.dataset.id) {
                checkbox.ischecked = !checkbox.ischecked;
                return checkbox;
            } else {
                return checkbox;
            }
        })
        setCheckedState(resultArray);
    }

    let checkboxArray = checkedState.map((item, index) => {
        return (
            <div key={index}>
                <input type='checkbox' data-id={item.id} onChange={handleCheckChange} checked={item.ischecked}/>
                <label htmlFor={item.name} className='bold'>{item.title}</label>
            </div>
        )
    })

    let shopView = [
        {
            "name": "Temp",
            "image": "./img/room.png",
            "price": 1999.99,
            "description": "Temp"
        },
        {
            "name": "Temp",
            "image": "./img/room.png",
            "price": 1999.99,
            "description": "Temp"
        }
    ]

    if(props.productData !== null) {
        shopView = props.productData;
    }    
    const searched_data = shopView.filter((product) => {
        if(search === '') {
            return true;
        } else {
            const casedProductName = product.name.toLowerCase();
            const casedSearchTerm = search.toLowerCase();
            return casedProductName.includes(casedSearchTerm);
        }
    })

    let productListArray = (
        <p className="h3 text-center">Sorry! There were no matches.</p>
    )
    if(searched_data.length !== 0) {
        productListArray = searched_data?.map((item) => {
            return <ProductCard key={item._id} product={item} />;
        })
    }

    return (
        <div className='contactbody'>
            <div className='sortbar d-flex d-md-none'>
                <button onClick={handleSortOpen}>
                <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABCklEQVR4nO2TTWoCQRBGn7tsXMqEbFSyySE8h17CY8SreAC9gJBsshd1N4oncJtNh4ZvoBB/erqH0Qnz4IOirO56Myq0tDw5L8BJ8XUZhkoSY8Apvg7lHTgqvo5maQQWgWf6QG7ORUv0gN+z+N4t/Cs/mOVFDjFfx9Q8+UL19M7yvea+zPKi3peV+NHBieLUu8ZKM99A1wh01XOaCeLjwmss4j+7xACYayFmHvXmmglidkPgM/AOK1CaXIdHpjdSL69DwCkd0+uUvDRJoAqaLeDu5P8LnPMKbHXhhpoFMmCty3bAW50CWeTySgSyhOXJAlni8mSBjQ5v9QOModl/Q/dogSp4uEBLM/gD+lqZV9EG3KcAAAAASUVORK5CYII=' />
                </button>
                <p>Sort and Filter</p>
                {sortOpen && <SortFilter handleOpenCallback={handleSortOpen} />}
            </div>
            <div className="d-flex">
            <div className='desktopsort d-none d-md-block d-lg-block'>
                <h2 className='mt-3 text-center'>Filter & Sort</h2>
                <div className='searchbar' value={search} onChange={handleChange}>
                    <input type='text' placeholder="Search By Name" className="form-control"></input>
                </div>
                <div className='filters d-flex flex-column'>
                    <p className='bold h3 text-left px-4'>Type:</p>
                    {checkboxArray}
                </div>
                <div className='pricesort d-flex flex-column'>
                    <p className='bold h3 text-left px-4'>Price</p>
                    {sortArray}

                </div>
            </div>
            <div className='itemlist d-flex'>
                {productListArray}
            </div>
        </div>
        </div>
    )
}