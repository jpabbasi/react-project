import './MyStacks.css'
import { stackItems } from "./data"

const MyStacks = () => {
  return (
      <div className="stacks-grid">
        {stackItems.map((stack) => (
        <div className="stack-item">
            <img src={stack.icon} alt="react" />
            <div className='stack-texts'>
                <h6>{stack.title}</h6>
                <p>{stack.subtitle}</p>
            </div>
        </div>
    ))
    }
        </div>
  )
}

export default MyStacks
