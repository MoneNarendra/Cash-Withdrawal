import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  changeBalace = valueAmout => {
    this.setState(preValue => ({
      balance: preValue.balance - valueAmout,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    return (
      <div className="bg-container">
        <div className="inner-container">
          <div className="user-profile-container">
            <div className="profile">
              <h1 className="profile-name">S</h1>
            </div>
            <h1 className="user-name">Sarah Williams</h1>
          </div>
          <div className="user-balance-contaier">
            <div>
              <p className="balance-text">Your Balance</p>
            </div>
            <div className="balance-amout-conatiner">
              <p className="amount">{balance}</p>
              <p className="rupees-text">In Rupees</p>
            </div>
          </div>
          <div className="withdraw-container">
            <p className="withdraw-heading">Withdraw</p>
            <p className="withdraw-discription">CHOOSE SUM (IN RUPEES)</p>
            <ul className="withdraw-amouts-list">
              {denominationsList.map(eachAmount => (
                <DenominationItem
                  eachAmount={eachAmount}
                  key={eachAmount.id}
                  changeBalance={this.changeBalace}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
