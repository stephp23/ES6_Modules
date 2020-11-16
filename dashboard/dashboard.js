
// From component folder
import { Users } from '../components/users.js';
import { Issues } from '../components/issues.js';

// From layout folder
import { Header } from '../layouts/header.js'; 
import { Sidebar } from '../layouts/sidebar.js'; 


class Dashboard {

  loadDashboard(){

    // Create new instances
    const users = new Users();
    const issues = new Issues();
    const header = new Header();
    const sidebar = new Sidebar();

    // Load new instances
    users.loadUsers();
    users.loadIssues();
    users.loadHeader();
    users.loadSidebar();

    console.log('Dashboard component is loaded');
  }

}

export { Dashboard }; 