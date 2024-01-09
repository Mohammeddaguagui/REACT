import { useSelector } from "react-redux";

const Suivre_demand=()=>{
    const tab=useSelector(state=>state.tab)
    return(
<>
<div class="table-responsive">
    <table class="table table-primary">
        <thead>
            <tr>
                <th scope="col">CMarque</th>
                <th scope="col">modele</th>
                <th scope="col">la date</th>
                <th scope="col">le prix</th>

            </tr>
        </thead>
        <tbody>
            {tab.map(item=>{
                return(
                    <tr>
                        <th scope="col">{item.marque}</th>
                        <th scope="col">{item.modele}</th>
                        <th scope="col">{item.date}</th>
                        <th scope="col">{item.v}</th>

                    </tr>)
            })}
        </tbody>
    </table>
</div>

</>
    )
}
export default Suivre_demand;