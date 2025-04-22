#  Maximum Rectangular Area in a Histogram
def area_in_a_histogram(Bars): 
    count = 1 
    array = []

    for i in range(0, len(Bars)):
        for j in range(0 , len(Bars)):
            array.append((Bars[j:j+count]))
        count+=1 
    
    result = []
    
    for i in range(0, len(array)):
        min1 = min(array[i])
        mul = min1 * len(array[i])
        result.append(mul)
    
    return max(result)

print(area_in_a_histogram([6, 2, 5, 4, 5, 1, 6]))
print(area_in_a_histogram([2, 1, 5, 6, 2, 3]))
print(area_in_a_histogram([1, 2, 3, 4, 5]))
print(area_in_a_histogram([5, 5, 5, 5, 5]))
