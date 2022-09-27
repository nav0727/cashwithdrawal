/* eslint-disable no-unused-vars */
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  getFirstCharOfName = name => name.slice(0, 1)

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Sarah Williams'
    const initial = this.getFirstCharOfName(name)

    return (
      <div className="bg1">
        <div className="bg2">
          <div className="c1">
            <p className="s">{initial}</p>
            <p className="u">{name}</p>
          </div>
          <div className="bg3">
            <p className="y">Your Balance</p>
            <p className="b">
              {balance}
              <br />
              <span className="c">In Rupees</span>
            </p>
          </div>
          <p className="w">Withdraw</p>
          <p className="ch">CHOOSE SUM (IN RUPEES)</p>
          <ul className="bg4">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                denominationDetails={eachDenomination}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
