/* eslint-disable react/prop-types */


function Inputs({ type, propsOnChange, name, placeholder, value }) {
    

    const handleOnChange = (e) => {
        propsOnChange(e.target.value)
    }
    return (
        <div className="w-full">
            <input type={type} value={value} name={name} onChange={handleOnChange} placeholder={placeholder} className="bg-transparent border border-[#E93C24] rounded-2xl p-3 w-full text-white outline-none" />
        </div>
    );
}

export default Inputs;