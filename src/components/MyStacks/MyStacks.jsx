import './MyStacks.css'
import { stackItems } from "./data"

const MyStacks = () => {
  return (
      <div className="stacks-grid">
        {stackItems.map((stack) => (
        <div className="stack-item">
            <img src={stack.icon} alt="react" />
            <div className='stack-texts'>
                <h5>{stack.title}</h5>
                <h6>{stack.subtitle}</h6>
            </div>
        </div>
    ))
    }
        </div>
  )
}

export default MyStacks
