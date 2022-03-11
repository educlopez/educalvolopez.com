import DarkSwitchFloatNav from './darkSwitchFloatNav';


export default function MyFloatNav({ }) {

  return (
    <div>
      <div className="border floatnav border-slate-200 dark:border-slate-700">
        <div className="floatnav-content">
          <button className="transition duration-300 ease-in-out floatnav-item hover:-translate-y-1">
            <img src="/assets/general/home.png" className="img-test" />
          </button>
          <hr className="floatnav-separator"></hr>
          <DarkSwitchFloatNav />
        </div>
      </div>
    </div>
  );
}
