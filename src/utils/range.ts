export function* range(start:number, end?:number=start){
    if(start==end)start=1
    for(;start <= end; start++){
        yield start;
    }
}
