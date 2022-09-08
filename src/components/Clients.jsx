import styles from "../style"
import { clients } from "../constants"
const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div key={client.id} className={`${styles.flexCenter} sm:min-w-[192px] min-w-[120px] flex-1 feature-card py-10 rounded-full`}>
          <img src={client.logo} alt="client" className="sm:w-[192px] w-[100px] object-contain " />
        </div>
      ))}
    </div>
  </section>
)

export default Clients