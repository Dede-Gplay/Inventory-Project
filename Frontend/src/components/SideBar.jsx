import React from 'react'
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCircleExclamation, faArrowRightFromBracket, faHouse, faBoxesStacked, faPrescriptionBottleMedical, faTrashCan, faWrench, faChartLine, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons"

function SideBar() {
  return (
   <aside id='sidebar' className='sidebar'>
    <ul className='sidebar-nav' id='sidebar-nav'>
        <li className='nav-item'>
            <a className='nav-link' href='/'>
                <FontAwesomeIcon icon={ faHouse } className='icon'/>
                <span>Dashboard</span>
            </a>
        </li>
        <li className='nav-item'>
            <a className='nav-link collapsed' data-bs-target='#components-nav' data-bs-toggle='collapse' href='#'>
                <FontAwesomeIcon icon={faBoxesStacked} className='icon' />
                <span>Inventory Items</span>
            </a>
            <ul id='components-nav' className='nav-content collapse' data-bs-parent='#sidebar-nav'>
                <li>
                    <a href='#'>
                        <FontAwesomeIcon icon={faPrescriptionBottleMedical} className='icons' />
                        <span>Medications</span>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <FontAwesomeIcon icon={faTrashCan} className='icons' />
                        <span>Consumables</span>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <FontAwesomeIcon icon={faWrench} className='icons' />
                        <span>Generals</span>
                    </a>
                </li>
            </ul>
        </li>
        <li className='nav-item'>
            <a className=' nav-link collapsed' href='/'>
                <FontAwesomeIcon icon={ faChartLine } className='icon'/>
                <span>Report</span>
            </a>
        </li>
        <li className='nav-item setting'>
            <a className='nav-link collapsed' href='/'>
                <FontAwesomeIcon icon={faArrowRightFromBracket} className='i'/>
                <span>Sign  Out</span>
            </a>
        </li>
    </ul>
    </aside>
  )
}

export default SideBar
