# Basic example
    const musicians = ['peter', 'bjorn', 'john'];

    <BasicList>
      {musicians.map(musician => (
        <h1 key={musician} style={{ margin: 0 }} >{musician}</h1>
      ))}
    </BasicList>

# Styled example
    const musicians = ['peter', 'bjorn', 'john', 'kitti'];

    <BasicList lineColor={'#FF00FF'} lineThickness={'20px'} marginTop={'2rem'} marginBottom={'2rem'} >
      {musicians.map(musician => (
        <h1 key={musician} style={{ margin: 0 }} >{musician}</h1>
      ))}
    </BasicList>
