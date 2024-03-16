import './index.css'

const DenominationItem = props => {
  const {eachAmount, changeBalance} = props
  const {value} = eachAmount
  const debitBalace = () => {
    changeBalance(value)
  }
  return (
    <li className="withdraw-amout-item" onClick={debitBalace}>
      <button className="withdraw-amount" type="button">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
