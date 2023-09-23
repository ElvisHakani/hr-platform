import { useEffect, useState } from "react"

//custom hook yne merr si input nje URL psh useFetch('https://shembull.com/datas/')
const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    //useEffect-i sigurohet qe te egzekutoje kerkesat fetch(url, {})
    //sa here qe URL ndryshon
    useEffect(()=>{

        //Perpara se te bejme nje kerkese te re, sigurohemi
        //qe te tre statet jane te resetuara
        setData(null)
        setIsPending(true)
        setError(null)

        //bejme kerkesen ne server me fn fetch(), qe ne rastin e marrjes
        //te te dhenave nga serveri s'ka nevoj per parametrin e dyte '{}'
        //mjafton vetem URL-ja
        fetch(url)
        //mbasi behet kerkesa e kapim pergjigjen me metoden .then()
        //e cila e merr response-in si parameter, e kam quajtuar 'res'
        .then(res => {
            //nese response 'jo i suksesshem' hidh nje error
            if(!res.ok) throw Error('Lidhja me DB deshtoi')
            //nese response i suksesshem, kthe te dhenat ne formatin e duhur
        //duke perdorur metoden .json()
            return res.json()
        })
        //me pas i kapim te dhenat e transformuar me nje .then() te dyte
        //prap .then i merr keto te dhena si parameter dhe i ruajme ne state
        //ky .then() egzekutohet vetem nese s'ka ndodhur error tek then-i i pare
        .then(serverData => {
            setData(serverData);
            //siguarohemi qe dy statet e tjera jane 'false'
            setIsPending(false);
            setError(null)
        })
        //metoda .catch() egzekutohet nese ka ndodhur ndonje error me siper
        //.catch() e merr errorin si parameter
        .catch(error => {
            setError(error.message)
            //sigurohemi qe data dhe isPending jane 'false'
            setData(null)
            setIsPending(false)
        })

    },[url]) //[url] -> quhet dependency array dhe ben te mundur qe useEffect te
    //egzekutohet vetem kur state (statet) brenda [] ndryshojne

    //dhe se fundmi Custom Hook kthen 3 variables (states) qe perkojne
    //me 3 statuset per kerkesa ne server
    //fillimisht isPending, pastaj ose kemi data ose error
    return {data, isPending, error}
}

export default useFetch;