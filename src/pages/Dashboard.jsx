import { useSelector, useDispatch } from "react-redux";

import { increment, decrement } from "@/store/slices/counterSlice";

const Dashboard = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Dashboard Page</h1>
      <p>Dashboard page protected with authentication</p>
      <br />
      <br />
      <div className="mb-5">
        <h4>State Management</h4>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <span style={{ padding: "1rem" }}>{counter}</span>
        <button onClick={() => dispatch(increment())}>Increment</button>
      </div>
    </div>
  );
};

export default Dashboard;
