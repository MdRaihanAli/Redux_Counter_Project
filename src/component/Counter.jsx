import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Increment, Decrement, AddAmount } from '../Redux/Features/Conter/CounterSlices'


function Counter() {
    const count = useSelector((state) => state.counter.value)
    const despatch = useDispatch()

    const [numberV, setNumber] = useState(2)
    return (
        <div>
            <div className="card mx-auto mt-5 card-compact w-96 bg-base-100 shadow-xl">
                <div className="cart-title font-bold text-center text-3xl bg-slate-400 p-3 rounded">Counter App</div>
                <div className="card-body">
                    <h2 className="text-center text-4xl text-green-600 font-extrabold">{count}</h2>
                    <input
                        onChange={(e) => setNumber(e.target.value)}

                        value={numberV}
                        type="number"
                        className='input input-bordered'
                    />

                    <div className="card-actions justify-end">
                        <button onClick={() => despatch(AddAmount(parseInt(numberV)))} className="btn btn-secondary">AddAmount</button>
                        <button onClick={() => despatch(Increment())} className="btn btn-primary">Increage</button>
                        <button onClick={() => despatch(Decrement())} className="btn btn-danger ms-4">Decrige</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter