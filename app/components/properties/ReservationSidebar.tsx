const ReservationSidebar = () => {
    return (
        <aside className="mt-6 p-6 col-span-2 rounded-xl boder border-pink-700 shadow-xl">
            <h2 className="mb-5 text-2xl">$200 por noche</h2>

            <div className="mb-6 p-3 border border-gray-400 rounded-xl">
                <label className="mb-2 block font-bold text-x5">Guests</label>

                <select className="w-full -ml-1 text-xm">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
            </div>

            <div className="w-full mb-6 py-6 text-center text-white bg-airbnb hover:bg-airbnb-dark rounded-xl">Reservar</div>

            <div className="mb-4 flex justify-between align-center">
                <p>$200 * 4 noches</p>
                <p>$800</p>
            </div>

            <div className="mb-4 flex justify-between align-center">
                <p>Djangobnb fee</p>
                <p>$50</p>
            </div>

            <hr />

            <div className="mt-4 flex justify-between align-center font-bold">
                <p>Total</p>
                <p>$900</p>
            </div>
        </aside>
    )
}

export default ReservationSidebar;