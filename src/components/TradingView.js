import TradingViewWidget, {Themes} from 'react-tradingview-widget';


function TradingView(props){
    return(
        <div style={{'width': '800px', 'height':'600px'}}>
        <TradingViewWidget
        symbol={props.pair}
        theme={Themes.DARK}
        autosize
        />
        </div>
    )
}


export default TradingView