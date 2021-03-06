import TradingViewWidget, {Themes} from 'react-tradingview-widget';


function TradingView(props){
    return(
        <div style={{'width': props.width, 'height':props.height}}>
        <TradingViewWidget
        symbol={props.pair}
        theme={Themes.LITE}
        autosize
        />
        </div>
    )
}


export default TradingView