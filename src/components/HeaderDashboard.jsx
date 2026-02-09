const HeaderDashbaord = () => {
    return (
        <div id="headerDasboard" className="flex justify-between items-center mb-2.5">
            <h2 className="font-medium text-white text-xl font-sans">Project Office</h2>
            <div className="flex gap-2 items-center cursor-pointer w-auto">
                <CiFilter className="text-2xl" />
                <button className="px-3.5 py-1.5 rounded-lg bg-transparent cursor-pointer">Filter</button>
            </div>
        </div>
    )
}

export default HeaderDashbaord;