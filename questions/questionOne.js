const dates = [
    'Oct 7,2009',
    'Nov 10,2009',
    'Jan 10,2009',
    'Oct 22,2009'
  ]
  
  const sortDates = dates.sort((a,b) => {
    const char = [a.substring(0,1), b.substring(0,1)],
          num = [a.substring(1)*1, b.substring(1)*1]
  
    if(char[0] < char[1])
      return -1
    else if(char[0] > char[1])
      return 1
    else{
      if(num[0] < num[1])
        return -1
      else if(num[0] > num[1])
        return 0
    }
  })
  
  console.log(sortDates)
  console.log(sortDates.toString())
  