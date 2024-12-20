import React from "react";
import { Grid2,Card, Paper,Button, Typography, Avatar } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuIcon from "../logos/menuicon.png";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Menu1 from "../logos/menu1.png";
import Menu2 from "../logos/menu2.png";
import Menu3 from "../logos/menu3.png";
import Menu4 from "../logos/menu4.png";
import Menu5 from "../logos/menu5.png";
import DboardIcon from "../logos/DboardIcon.png"
import Summery1 from "../logos/summery1.png";
import Card1 from "../logos/card1.png";
import Summery2 from "../logos/summery2.png"
import Summery3 from "../logos/summery3.png"
import Dash1 from "../logos/dash1.png";
import Dash2 from "../logos/dash2.png";
import Dash3 from "../logos/dash3.png";
import Dash4 from "../logos/dash4.png";
import Dash5 from "../logos/dash5.png";
import Dash6 from "../logos/dash6.png";
import Dash7 from "../logos/dash7.png";
import { PieChart,pieArcLabelClasses} from '@mui/x-charts/PieChart';
import { styled } from '@mui/material/styles';
import {ComposedChart,Bar,Line,XAxis,YAxis,CartesianGrid,Tooltip} from 'recharts';






  // Simulate menu options that affect layout
  const MenuSection = () => {
    
    const data = [
      { month: 'Jan', barValue: 4000, lineValue: 2400 },
      { month: 'Feb', barValue: 3000, lineValue: 1398 },
      { month: 'Mar', barValue: 2000, lineValue: 9800 },
      { month: 'Apr', barValue: 2780, lineValue: 3908 },
      { month: 'May', barValue: 1890, lineValue: 4800 },
      { month: 'Jun', barValue: 2390, lineValue: 3800 },
      { month: 'Jul', barValue: 3490, lineValue: 4300 },
    ];
    const rounded = (value)=> ({
      borderBottomLeftRadius: `${value}`,
      borderBottomRightRadius: `${value}`,
      borderTopLeftRadius: `${value}`,
      borderTopRightRadius: `${value}`,
    });
    const subDatasets = [
      { label: 'Group A', value: 50, color: '#0088FE' },
      { label: 'Group B', value: 25, color: '#00C49F' },
    ];
    const totalSubValue = subDatasets.reduce((sum, dataset) => sum + dataset.value, 0);
    const maxValue = 100;
    const perc = (totalSubValue*100)/maxValue;
    const Aperc = (subDatasets[0].value*100)/maxValue;
    const Bperc = (subDatasets[1].value*100)/maxValue
    const remainingValue = maxValue - totalSubValue;
    const getArcLabel = (params) => {
      const percent = params.value / totalSubValue;
      return `${(percent * 100).toFixed(0)}%`;
    };

    
    const chartData = [
      ...subDatasets.map((dataset) => ({
        id: dataset.id,
        label: dataset.title,
        value: dataset.value,
        color: dataset.color,
      })),
        {
          id: "remaining",
          label: "Remaining",
          value: remainingValue > 0 ? remainingValue : 0,
          color: "#D3D3D3", // Ash color
        },
    ];
    
    
    const StyledText = styled('text')(({ theme }) => ({
      fill: theme.palette.text.primary,
      textAnchor: 'middle',
      dominantBaseline: 'central',
    }));
    
    function PieCenterLabel({ children,txt }) {
      return (
        <>
        <StyledText x={100} y={80} fontWeight='bold'>
          {children}
        </StyledText>
        <StyledText x={100} y={90}>
          capacity
        </StyledText>
      </>
      );
    }
    return (
      <div style={{ display:'flex', justifyContent:'center'}}>
        <Grid2 container spacing={2} style={{ height: "100vh",width:"100vw",paddingLeft:'15px',paddingRight:'15px',background: 'linear-gradient(180deg, #63C9A4 0%, #32A078 100%)',...rounded('25px'),display:'flex',justifyContent:'space-between'}}>
        {/* Menu Column */}
        <Grid2 item xs={1} sx={{paddingTop:'15px', paddingBottom:'15px',height:'100%'}}>
          <Paper style={{ height: "100%", backgroundColor: "#ffff",...rounded('25px') }}>
            <Grid2 content={'div'} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
              <img style={{height:'30px', width:'30px',padding:'25px'}} src={MenuIcon} alt="icon"/>
            </Grid2>
            <Grid2 content={"div"} style={{display:'flex',justifyContent:'center',alignItems:'center',paddingBottom:'5px'}}>
              <Typography style={{color:'#59C19B',}} variant="p">menu</Typography>
            </Grid2>
            <Grid2>
              
              <ListItemButton>
                <ListItemIcon style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                  <img style={{color:'#0000', padding:"5px",background:'#59C19B',...rounded('3px')}} src={Menu1} alt="menu1"/>
                </ListItemIcon>
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                  <img style={{color:'#0000', padding:"5px"}} src={Menu2} alt="menu2"/>
                </ListItemIcon>
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                  <img style={{color:'#0000', padding:"5px"}} src={Menu3} alt="menu3"/>
                </ListItemIcon>
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                  <img style={{color:'#0000', padding:"5px"}} src={Menu4} alt="menu4"/>
                </ListItemIcon>
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                  <img style={{color:'#0000', padding:"5px",}} src={Menu5} alt="menu5"/>
                </ListItemIcon>
              </ListItemButton>
            </Grid2>
          </Paper>
        </Grid2>
  
        {/* Dashboard Column */}
        <Grid2 item xs={9} style={{paddingTop:'15px', paddingBottom:'15px',height:'100%', maxWidth:'72%',width:'72%'}}>
          <Paper style={{ height: "100%", backgroundColor: "#ffff",...rounded('25px')}}>
            <Grid2 component={"div"} style={{padding:"25px"}}>
              {/* dashbord upper*/}
              <Grid2 component={'div'} sx={{ display:'flex',justifyContent:"space-between",alignItems:"center"}}>

                <Grid2 component={'div'} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                  <img src={DboardIcon} alt="bdIcon"/>
                  <Typography variant="h6" style={{paddingLeft:'10px'}}>Dashboard</Typography>
                </Grid2>

                <Grid2 component={'div'} style={{ display:'flex',justifyContent:'center',alignItems:'center'}}>
                  <Avatar>AK</Avatar>
                  <Typography>Ashraful Khadem</Typography>
                  <IconButton>
                    <MoreVertIcon/>
                  </IconButton>
                </Grid2>
              </Grid2>
              {/*bashboard cards*/}
              <Grid2 style={{height:'100px', display:'flex', justifyContent:'space-between',width:'100%'}}>
                <Card style={{height:'100%',width:'17.87%'}}>
                  <Grid2 style={{height:'50%',padding:'0 10px', backgroundColor:'#59C19B',display:'flex', justifyContent:'space-around',alignItems:'center'}}>
                    <img style={{height:'35px', width:'35px',}} src={Dash1} alt="dash1"/>
                    <Typography style={{color:'#ffff',fontSize:'11px',fontWeight:'600',width:'95px'}}>
                    Overall System Efficiency
                    </Typography>
                  </Grid2>
                  <Grid2 style={{height:'50%',display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <Typography style={{fontSize:'25px'}}>70%</Typography>
                  </Grid2>
                </Card>
                <Card style={{height:'100%',width:'17.87%'}}>
                  <Grid2 style={{height:'50%',padding:'0 10px', backgroundColor:'#59C19B',display:'flex', justifyContent:'space-around',alignItems:'center'}}>
                    <img style={{height:'35px', width:'35px',}} src={Dash2} alt="dash2"/>
                    <Typography style={{color:'#ffff',fontSize:'11px',fontWeight:'600',width:'100px'}}>
                    Renewable Energy Utilization
                    </Typography>
                  </Grid2>
                  <Grid2 style={{height:'50%',display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <Typography style={{fontSize:'25px'}}>70%</Typography>
                  </Grid2>
                </Card>
                <Card style={{height:'100%',width:'17.87%'}}>
                  <Grid2 style={{height:'50%',padding:'0 10px', backgroundColor:'#59C19B',display:'flex', justifyContent:'space-around',alignItems:'center'}}>
                    <img style={{height:'35px', width:'35px',}} src={Dash3} alt="dash3"/>
                    <Typography style={{color:'#ffff',fontSize:'11px',fontWeight:'600',width:'100px'}}>
                    Carbon Emmision Reduction
                    </Typography>
                  </Grid2>
                  <Grid2 style={{height:'50%',display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <Typography style={{fontSize:'25px'}}>40%</Typography>
                  </Grid2>
                </Card>
                <Card style={{height:'100%',width:'17.87%'}}>
                  <Grid2 style={{height:'50%',padding:'0 10px', backgroundColor:'#59C19B',display:'flex', justifyContent:'space-around',alignItems:'center'}}>
                    <img style={{height:'35px', width:'35px',}} src={Dash4} alt="dash4"/>
                    <Typography style={{color:'#ffff',fontSize:'11px',fontWeight:'600',width:'100px'}}>
                    Energy Cost Savings
                    </Typography>
                  </Grid2>
                  <Grid2 style={{height:'50%',display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <Typography style={{fontSize:'25px'}}>150</Typography>
                    <Typography style={{fontSize:'11px',width:'85px',fontWeight:'600',paddingLeft:'10px'}}>metric tons CO2/year</Typography>
                  </Grid2>
                </Card>
                <Card style={{height:'100%',width:'17.87%'}}>
                  <Grid2 style={{height:'50%',padding:'0 10px', backgroundColor:'#59C19B',display:'flex', justifyContent:'space-around',alignItems:'center'}}>
                    <img style={{height:'35px', width:'35px',}} src={Dash5} alt="dash5"/>
                    <Typography style={{color:'#ffff',fontSize:'11px',fontWeight:'600',width:'100px'}}>
                    Overall System Carbon Footprint
                    </Typography>
                  </Grid2>
                  <Grid2 style={{height:'50%',display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <Typography style={{fontSize:'25px'}}>150</Typography>
                    <Typography style={{fontSize:'11px',width:'85px',fontWeight:'600',paddingLeft:'10px'}}>metric tons CO2/year</Typography>
                  </Grid2>
                </Card>
              </Grid2>

              <Grid2 style={{width:'100%', display:'flex', justifyContent:'space-Between', paddingTop:'20px'}}>
                <Grid2 style={{width:'68%'}}>
                  <Grid2 style={{display:'flex', alignItems:'baseline'}}>
                    <img style={{paddingRight:'10px'}} src={Dash6} alt="dash6"/>
                    <Typography>Energy Usage</Typography>
                  </Grid2>
                  <Card style={{marginTop:'10px', display:'flex', justifyContent:'space-around'}}>
                    <Grid2>
                        <ComposedChart width={500} height={250} margin={{top:20}} data={data} barGap={0}>
                                <CartesianGrid stroke="#ffff" />
                                <XAxis dataKey="month" />
                                <YAxis
                                  yAxisId="left"
                                  orientation="left"
                                  stroke="#8884d8"
                                  axisLine={false} // Hides Y-axis line
                                  tickLine={false} // Hides Y-axis tick marks
                                />
                                <YAxis
                                  yAxisId="right"
                                  orientation="right"
                                  stroke="#82ca9d"
                                  axisLine={false} 
                                  tickLine={false} 
                                />
                                <Tooltip />
                                
                                <Bar yAxisId="left" dataKey="barValue" fill="#8884d8" barSize={20} radius={[6, 6, 0, 0]}/>
                                {/* Smooth Curved Line Chart */}
                                <Line
                                  yAxisId="right"
                                  type="monotone"
                                  dataKey="lineValue"
                                  stroke="#82ca9d"
                                  strokeWidth={2}
                                  dot={false}
                                  
                                />
                              </ComposedChart>
                    </Grid2>
                    <Grid2 style={{paddingTop:'20px'}}>
                      <Grid2 style={{display:'flex',justifyContent:'start',alignItems:'center', fontSize:'10px', fontWeight:'bold'}}><span style={{marginRight:'5px', backgroundColor:'#78C3A8',height:'11px',width:'11px',...rounded('50%')}}></span>Temparature</Grid2>
                      <Grid2 style={{padding:'5px 0',display:'flex',justifyContent:'start',alignItems:'center', fontSize:'10px', fontWeight:'bold'}}><span style={{marginRight:'5px',backgroundColor:'#FFC480',height:'11px',width:'11px',...rounded('50%')}}></span>Energy</Grid2>
                      <Grid2 style={{height:'3px',backgroundColor:'#3BA881',width:'100px' }}></Grid2>
                      <Grid2 style={{padding:'5px 0'}}>
                        <Typography style={{fontSize:'10px',fontWeight:'600'}}>Energy consumption: </Typography>
                        <Typography style={{fontSize:'10px',fontWeight:'800'}}>137.23 kWh/month</Typography>
                      </Grid2>
                      <Grid2 style={{padding:'5px 0'}}>
                        <Typography style={{fontSize:'10px',fontWeight:'600'}}>House area: </Typography>
                        <Typography style={{fontSize:'10px',fontWeight:'800'}}>125 m2</Typography>
                      </Grid2>
                      <Grid2 style={{padding:'5px 0'}}>
                        <Typography style={{fontSize:'10px',fontWeight:'600'}}>Average temperature: </Typography>
                        <Typography style={{fontSize:'10px',fontWeight:'800'}}>50°C</Typography>
                      </Grid2>
                    </Grid2>
                  </Card>
                </Grid2>
                <Grid2 style={{width:'30%'}}>
                <Grid2 style={{display:'flex', alignItems:'baseline'}}>
                    <img style={{paddingRight:'10px'}} src={Dash7} alt="dash7"/>
                    <Typography>Daily Energy Cost</Typography>
                </Grid2>
                <Card style={{marginTop:'8px',}}>
                  <Grid2 style={{padding:'10px'}}>
                    <Grid2 style={{width:'100%', display:'flex',justifyContent:'space-between',border:'none'}}>
                      <Grid2 component={'div'} sx={6} style={{width:'48%',backgroundColor:'#FFA0481A',display:'flex',justifyContent:'center',alignItems:'center', flexDirection:'column', ...rounded('6px'),border:'1px solid #DBDBDB'}}>
                        <Grid2 style={{display:'flex',justifyContent:'center',alignItems:'center', padding:'5px', fontSize:'10px', fontWeight:'bold'}}><span style={{backgroundColor:'#FFA048',height:'11px',width:'11px',...rounded('50%'), margin:'0 5px'}}></span>Main power</Grid2>
                        <Typography style={{fontSize:'13px', fontWeight:'bold'}}>{Aperc}%</Typography>
                      </Grid2>
                      <Grid2 component={'div'} sx={6} style={{width:'48%',backgroundColor:'#4AB8761A',display:'flex',justifyContent:'center',alignItems:'center', flexDirection:'column', ...rounded('6px'),border:'1px solid #DBDBDB'}}>
                        <Grid2 style={{display:'flex',justifyContent:'center',alignItems:'center', padding:'5px', fontSize:'10px', fontWeight:'bold'}}><span style={{backgroundColor:'#4AB876',height:'11px',width:'11px',...rounded('50%'), margin:'0 5px'}}></span>Green energy</Grid2>
                        <Typography style={{fontSize:'13px', fontWeight:'bold'}}>{Bperc}%</Typography>
                      </Grid2>
                    </Grid2>
                    <Grid2 style={{}}>
                      <Typography style={{fontWeight:'600', textAlign:'center'}}>Total: 365TBH</Typography>
                      <Grid2>
                      <PieChart
                              series={[
                                
                                {
                                  data: chartData,
                                  cx: 130,
                                  cy: 80,
                                  outerRadius: 70,
                                  arcLabel: getArcLabel,
                                },
                              ]}
                              sx={{
                                [`& .${pieArcLabelClasses.root}`]: {
                                  fill: 'white',
                                  fontSize: 14,
                                },
                              }}
                              height={160}
                              slotProps={{
                                legend: { hidden: true },
                              }}
                            >  
                            </PieChart>
                      </Grid2>
                    </Grid2>
                  </Grid2>
                </Card>
                </Grid2>
              </Grid2>

            </Grid2>
          </Paper>
        </Grid2>

        {/* Summary Column */}
        <Grid2 item sx={3} style={{maxWidth:'19.16%',paddingTop:'15px', paddingBottom:'15px',height:'100%'}}>
          <Paper style={{ height: "100%", backgroundColor: "#ffff",...rounded('25px')}}>
                  <Grid2 component={"div"} style={{padding:'25px'}}>

                    <Grid2 component={"div"} style={{}}>
                        <Grid2 style={{display:'flex',justifyContent:'start', alignItems:"center", paddingBottom:'12px'}} component={"div"}>
                            <img style={{height:'21px',width:'20px',}} src={Summery1} alt="summery_logo"/>
                            <Typography variant="h6" style={{ paddingLeft:'10px',fontWeight: '500',fontSize: "1.15rem",lineHeight: '1.6',letterSpacing: '0.0075em'}}>EnergyMode</Typography>
                        </Grid2>
                        <Card sx={{ background:' #FFA048;', width:'100%' , ...rounded('20px')}}>
                            <CardContent style={{display:"flex",flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
                              <Typography variant="p" style={{ fontSize:'19px',width:'200px',fontWeight:'600', color:'#ffff',textAlign:'center'}}>Best Power Effeciency</Typography>
                              <img style={{padding:'20px',width: '90.63px',height: '41.31px'}} src={Card1} alt="card1"/>
                              <Typography variant="p" style={{fontSize:'14px',color:'#ffff'}}>This mode will help to extend the power storage efficiency.</Typography>
                            </CardContent>
                            <CardActions style={{display:'flex', justifyContent:'center',paddingBottom:'25px'}}>
                                <Button style={{fontSize:'10px',fontWeight:'600',color: '#414141',background:'#ffff',paddingRight:'15px',paddingLeft:'15px',...rounded('25px')}}><img style={{color: '#414141',height:"17px",width:'16px',paddingRight:'5px'}} src={Summery2} alt="s2"/>Change Plan</Button>
                            </CardActions>
                        </Card>
                    </Grid2>

                    <Grid2 component={"div"}>
                      <Grid2 component={"div"} style={{paddingTop:'10px'}}>
                        <Grid2 style={{display:'flex',justifyContent:'start', alignItems:"center",paddingBottom:'10px'}} component={"div"}>
                            <img style={{height:'21px',width:'20px',}} src={Summery3} alt="summery_logo"/>
                            <Typography variant="h6" style={{ paddingLeft:'10px',fontWeight: '500',fontSize: "1.15rem",lineHeight: '1.6',letterSpacing: '0.0075em'}}>Energy Storage</Typography>
                        </Grid2>
                        <Card sx={{ background:' #ffff;', width:'100%' , ...rounded('20px')}}>
                            <CardContent style={{display:"flex",flexDirection:'column', justifyContent:'center',alignItems:'center',height: "100%",position:'relative'}}>
                            
                            <PieChart
                              series={[
                                
                                {
                                  data: chartData,
                                  cx: 100,
                                  cy: 75,
                                  innerRadius: 50,
                                  outerRadius: 70,
                                },
                              ]}
                              height={160}
                              slotProps={{
                                legend: { hidden: true },
                              }}
                            >
                              <PieCenterLabel>
                                {perc}%
                              </PieCenterLabel>
                                
                            </PieChart>
                            <Grid2 style={{width:'100%', display:'flex',justifyContent:'space-between',border:'none'}}>
                              <Grid2 component={'div'} sx={6} style={{backgroundColor:'#FFA0481A',display:'flex',justifyContent:'center',alignItems:'center', flexDirection:'column', ...rounded('10px'),border:'1px solid #DBDBDB'}}>
                                <Grid2 style={{display:'flex',justifyContent:'center',alignItems:'center', padding:'5px', fontSize:'10px', fontWeight:'bold'}}><span style={{backgroundColor:'#FFA048',height:'11px',width:'11px',...rounded('50%'), margin:'0 5px'}}></span>Main power</Grid2>
                                <Typography style={{fontSize:'13px', fontWeight:'bold'}}>{Aperc}%</Typography>
                              </Grid2>
                              <Grid2 component={'div'} sx={6} style={{backgroundColor:'#4AB8761A',display:'flex',justifyContent:'center',alignItems:'center', flexDirection:'column', ...rounded('10px'),border:'1px solid #DBDBDB'}}>
                                <Grid2 style={{display:'flex',justifyContent:'center',alignItems:'center', padding:'5px', fontSize:'10px', fontWeight:'bold'}}><span style={{backgroundColor:'#4AB876',height:'11px',width:'11px',...rounded('50%'), margin:'0 5px'}}></span>Green energy</Grid2>
                                <Typography style={{fontSize:'13px', fontWeight:'bold'}}>{Bperc}%</Typography>
                              </Grid2>
                            </Grid2>
                            
                            </CardContent>
                        </Card>
                      </Grid2>
                    </Grid2>

                </Grid2>
          </Paper>
        </Grid2>
        
        
  
        
        
      </Grid2>
      </div>
      
    );
  };

  

export default MenuSection;


