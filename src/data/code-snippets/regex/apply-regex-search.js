export default `values = []

for index, date in df.iteritems(): 
    day = month = year = match = date_string = None
        
    # if dd/mm/yy or dd-mm-yy 
    if re.search('\d{1,2}[\/-]\d{1,2}[\/-]\d{1,4}', date) != None: 
        date_string = re.search('\d{1,2}[\/-]\d{1,2}[\/-]\d{1,4}', date).group(0)
        month, day, year = re.split('[/-]', date_string)
        day, month, year = prefix_date(day, getMonth(month), year)

    # if dd month-name yy, e.g 06 May 1972
    elif re.search(r'\d{1,2}[\s](?:' + month_str + ')[\s]\d{2,4}', date):
        date_string = re.search(r'\d{1,2}[\s](?:' + month_str + ')[\s]\d{2,4}', date).group(0)
        day, month, year = re.split('[ ]', date_string)      
        day, month, year = prefix_date(day, getMonth(month), year)

    # if month-name dd yyyy, e.g. September 01, 2012
    elif re.search(r'(?:' + month_str + ')\s\d{2,4}\,?\s\d{2}', date):
        date_string = re.search(r'(?:' + month_str + ')\s\d{2}\,?\s\d{2,4}', date).group(0)
        month, day, year = re.split('[ ]', date_string)      
        day, month, year = prefix_date(day, getMonth(month), year)
        
    # if month-name yy
    elif re.search(r'(?:' + month_str + ')\s\d{2,4}', date):
        date_str = re.search(r'(?:' + month_str + ')\s\d{2,4}', date).group(0)
        month, year = re.split(r'[\s]', date_str)
        day, month, year = prefix_date('01', getMonth(month), year)
        
    # if month-name, yyyy
    elif re.search(r'(?:' + month_str + ')\,?\s\d{1,4}', date): 
        date_str = re.search(r'(?:' + month_str + ')\,?\s\d{1,4}', date).group(0)
        month, year = re.split(r'[\s]', date_str)
        day, month, year = prefix_date('01', getMonth(month), year)
        
    # if mm/yy
    elif re.search(r'\d{1,2}[\/-]\d{2,4}', date) != None: 
        date_string = re.search('\d{1,2}[\/-]\d{2,4}', date).group(0)
        month, year = re.split('[/-]', date_string)
        day, month, year = prefix_date('01', getMonth(month), year)
    
    # if dd/yyyy
    elif re.search(r'\s\d{1,2}[\/\-\s]\d{4}', date):
        date_str = re.search(r'\d{1,2}[\/\-\s]\d{4}', date).group(0)
        month, year = re.split(r'[\s\/]', date_str)
        day, month, year = prefix_date('01', getMonth(month), year)
            
    # year with special chars in front
    elif re.search(r'[\.\(\s\(]\d{4}[\)\s\.\-\,\\n]', date): 
        year = re.search('[\.\(\syr\s\(]\d{4}[\)\s\.\-\,\\n]', date).group(0)
        year = re.sub('[,\()]', '', year)
        day, month, year = prefix_date('01', '01', year)
        
    #year with chars in front 
    elif re.search(r'[syr]\d{4}\s', date): 
        year = re.search(r'[syr]\d{4}\s', date).group(0)
        year = re.sub('[syr]', '', year)
        day, month, year = prefix_date('01', '01', year)
        
    # year with parenthesis or whitespace
    elif re.search(r'\(?[s]?\d{4}[\s\.\-\,]', date): 
        year = re.search('\(?[s]?\d{4}[\s\.\-\,]', date).group(0)
        year = re.sub('[,]', '', year)
        day, month, year = prefix_date('01', '01', year)
        
    else: 
        print("unregged!", date)
        date_string = date

    date_string = day + '/' + month + '/' + year    
    date_string = re.sub('[\s+\-\.\syr]', '', date_string)
    
    values.append(date_string)

sorted_dates = pd.to_datetime(pd.Series(values), dayfirst=True, errors='coerce')
sorted_dates = new_values.sort_values()

`