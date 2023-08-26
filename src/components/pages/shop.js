import React, {useState} from "react";
import SortFilter from "../SortFilter.js";

export default function Shop(props) {
    const [sortOpen, setSortOpen] = useState(false);
    function handleSortOpen(event) {
        event.preventDefault();
        setSortOpen(!sortOpen);
    };

    return (
        <div className='contactbody'>
            <div className='sortbar d-flex'>
                <button onClick={handleSortOpen}>
                <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABCklEQVR4nO2TTWoCQRBGn7tsXMqEbFSyySE8h17CY8SreAC9gJBsshd1N4oncJtNh4ZvoBB/erqH0Qnz4IOirO56Myq0tDw5L8BJ8XUZhkoSY8Apvg7lHTgqvo5maQQWgWf6QG7ORUv0gN+z+N4t/Cs/mOVFDjFfx9Q8+UL19M7yvea+zPKi3peV+NHBieLUu8ZKM99A1wh01XOaCeLjwmss4j+7xACYayFmHvXmmglidkPgM/AOK1CaXIdHpjdSL69DwCkd0+uUvDRJoAqaLeDu5P8LnPMKbHXhhpoFMmCty3bAW50CWeTySgSyhOXJAlni8mSBjQ5v9QOModl/Q/dogSp4uEBLM/gD+lqZV9EG3KcAAAAASUVORK5CYII=' />
                </button>
                <p>Sort and Filter</p>
                {sortOpen && <SortFilter handleOpenCallback={handleSortOpen} />}
            </div>
            <div className='itemlist'>
                <div className='shopitem'>
                    <img src='./img/tempig.png' />
                    <div className='itemtext'>
                        <p>Black Sweatshirt</p>
                        <div className='bottomtext d-flex'>
                            <p>S / M / L</p>
                            <p>$1999.99</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}