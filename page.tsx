import Header from "./component/header";
import Footer from "./component/Footer/footer";
import Link from "next/link";
const HomePage =()=>{
    return(
        <div className="text-2xl bg-emerald-100	">
                 <ul>
                <li>HomePage</li>
                <li>

                    <Link href="/about us">about </Link>
                </li>
            <Header Freinds ={"Hello Freinds"} hi = "Hi">hello World</Header>
       
            <h1 className="mx-6 py-2.5 px-2.5 mr-2 order-solid border-2 border-indigo-600 ... border-slate-900			italic	outline-4 text-lg	
	outline-zinc-900	outline-dotted font-sans	 	font-bold			rounded-lg		" >
                <center><b> Hello! Iam Touqeer Ahmed Soomro</b></center></h1>
                
                <p className="font-small text-neutral-500	mx-1.5	capitalize	 "><b>I study Frontend Developer Next.JS Tailwind CSS Designer in GIAIC & i do job Accountant At The Smart School</b>
        
            <span className="font-small text-neutral-500 mx-1  pt-1	mt-1.5		">Contact# 03333738659</span></p>
            <Footer Good ={"Good Luck"} hi = "hi">Good Luck</Footer>
            
            </ul>
            
        </div>
    )
};
export default HomePage;