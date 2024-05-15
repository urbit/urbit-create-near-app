import React, { useContext } from 'react'
import { Widget } from '../vm/dist/index'
import localComponents from '../../build/data.json'
import { RemoteShipContext } from '../RemoteShipContext'

function Urbit() {
  //  components hosted on testnet
  const UrbitWidgetTestnet = 'urbitlabs.testnet/widget/UrbitWidget'
  const UrbitHeaderTestnet = 'urbitlabs.testnet/widget/UrbitHeader'
  //  locally built VM components
  const Documentation =
    localComponents['account.Urbit/widget/components.documentation']
  const localPokeUrbit =
    localComponents['account.Urbit/widget/components.pokeUrbit']
  const localScryUrbit =
    localComponents['account.Urbit/widget/components.scryUrbit']

  const remote = useContext(RemoteShipContext)

  return (
    <div>
      {/* TODO switch to mainnet */}
      {/* This component is onchain */}
      <Widget src={UrbitHeaderTestnet} />
      {/* This component is local and stored in build/data.json */}
      <Widget code={Documentation.code} />
      <div style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        {/* These components are onchain, but there are
            copies of them in this project  */}
        <Widget
          // TODO add mainnet src
          code={localPokeUrbit.code}
          props={{ ship: window.ship ?? remote.ship }}
        />
        <Widget
          // TODO add mainnet src
          code={localScryUrbit.code}
          props={{ ship: window.ship ?? remote.ship }}
        />
      </div>
    </div>
  )
}

export default Urbit
