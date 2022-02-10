import React from 'react'
import ReactDOM from 'react-dom'
import { Chart as ChartJS, ArcElement, Tooltip, CategoryScale,LinearScale, PointElement,
    LineElement } from 'chart.js'
import { Doughnut, Line } from 'react-chartjs-2' 
import 'antd/dist/antd.css';
import { Button, Layout, Select } from 'antd';
import { PieChartOutlined, UserOutlined, DotChartOutlined, InfoCircleOutlined } from '@ant-design/icons'
import { useWalletModal } from './hooks/useWalletModal'
import { useWalletProvider } from './hooks/useWalletProvider'
import { WalletProvider } from './providers'
import './assets/style.css'
 
 
 
ChartJS.register(ArcElement, Tooltip, CategoryScale, LinearScale, PointElement, LineElement);

const { Header, Footer, Content } = Layout;
const { Option } = Select

export const data = {
    labels: [
        'Red',
        'Blue',
        'Yellow'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ]
      }]
  };
 
export const data2 = {
    labels: ["poin1", "poin2", "poin3", "poin4","poin5","poin6", "poin7"],
    datasets: [{
      label: '2 Dataset',
      data: [39, 3, 20, 30, 23, 14, 6],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.6
    }],
    
  };

function App() { 
 
    const { setOpen, deactivate } = useWalletModal();
    const { account, connected } = useWalletProvider();

    return (
        <div> 
            <main>
                <Layout>
                    <Header className='topbar'>
                        <h3>Alexei Frontend Test</h3>
                        <div className='walletbtn-container'> 
                            <label className='wallet-address' style={{"color": "#fff"}}>{account !=null? account.substring(0, 7) + "...":""}</label> 
                            <Button type='primary' onClick={() => connected ? deactivate() : setOpen(true)}>{connected ? 'Disconnect' : 'Connect'}</Button>                             
                        </div>
                    </Header>
                    <Layout>
                        <Content> 
                            <div className='container'>
                                <div className='linechart'>
                                    <div className='chart-title-container'>
                                        <h3>$5.55 FairMint</h3>
                                        <p>Last transaction price</p>
                                    </div>
                                    <div className='chose-select'>
                                        <Select defaultValue="Last 3 month" style={{ width: 160 }}>
                                            <Option value="jack">Last 3 month</Option>
                                            <Option value="lucy">Last 2 month</Option>
                                        </Select>
                                    </div>
                                    <Line data={data2}/>
                                </div> 
                                <h3 className='page-subtitle'>Live Data</h3>
                                <div>
                                    <div className='chart-cards-container'>
                                        <div className='dout'>
                                            <Doughnut data={data} />
                                        </div>
                                        <div className='card-container'>
                                            <div className="carditem-container">
                                                <div className="carditem">
                                                    <div className="icon_container">
                                                        <PieChartOutlined style={{ fontSize: "30px", color:"#3f9eff" }}/>
                                                    </div>
                                                    <div className='cardtexts'>
                                                        <h4>$6,449,620</h4>
                                                        <p>Invested in Fairmint</p>
                                                    </div>
                                                    <div className="info-mark">
                                                        <InfoCircleOutlined style={{ fontSize: "20px", color:"#3fff63" }}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carditem-container">
                                                <div className="carditem">
                                                    <div className="icon_container">
                                                        <UserOutlined style={{ fontSize: "30px", color:"#8d86fb" }}/>
                                                    </div>
                                                    <div className='cardtexts'>
                                                        <h4>$6,449,620</h4>
                                                        <p>Invested in Fairmint</p>
                                                    </div>
                                                    <div className="info-mark">
                                                        <InfoCircleOutlined style={{ fontSize: "20px", color:"#3fff63" }}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carditem-container">
                                                <div className="carditem">
                                                    <div className="icon_container">
                                                        <DotChartOutlined style={{ fontSize: "30px", color:"#3f9eff" }}/>
                                                    </div>
                                                    <div className='cardtexts'>
                                                        <h4>$34.4M</h4>
                                                        <p>Company Valuation</p>
                                                    </div>
                                                    <div className="info-mark">
                                                        <InfoCircleOutlined style={{ fontSize: "20px", color:"#3fff63" }}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carditem-container">
                                                <div className="carditem">
                                                    <div className="icon_container">
                                                        <PieChartOutlined style={{ fontSize: "30px", color:"#3f9eff" }}/>
                                                    </div>
                                                    <div className='cardtexts'>
                                                        <h4>36.5%</h4>
                                                        <p>Invested in Rate</p>
                                                    </div>
                                                    <div className="info-mark">
                                                        <InfoCircleOutlined style={{ fontSize: "20px", color:"#3fff63" }}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </Content>                   
                    </Layout>
                    <Footer>
                        <div className='w-100 text-center'>
                            <h5 className='w-100 text-center footertext'>--------　　　2022.2.10  Alexei Xergei　　　--------</h5>
                        </div>
                    </Footer>
                </Layout>                
            </main> 
        </div >
    )
}

ReactDOM.render(
    <React.StrictMode>
        <WalletProvider>
            <App />
        </WalletProvider>
    </React.StrictMode>,
    document.getElementById('root')
);