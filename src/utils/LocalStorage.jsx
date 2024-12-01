const employees = [
  {
    id: 1,
    firstname: "Ishu",
    email: "ishu@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        complete: true,
        failed: true,
        title: "Prepare Report",
        description: "Prepare the monthly sales report for the meeting.",
        date: "2024-11-30",
        category: "Reports",
      },
      {
        active: true,
        newTask: false,
        complete: true,
        failed: false,
        title: "Client Follow-up",
        description: "Follow up with client regarding project milestones.",
        date: "2024-11-25",
        category: "Communication",
      },
      {
        active: false,
        newTask: false,
        complete: false,
        failed: true,
        title: "Submit Budget Plan",
        description: "Submit the revised budget plan for Q1.",
        date: "2024-11-20",
        category: "Finance",
      },
    ],
    taskNumbers: {
      active: 2,
      newTask: 3,
      complete: 5,
      failed: 2,
    },
  },
  {
    id: 2,
    firstname: "Ishaan",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        complete: false,
        failed: false,
        title: "Update Inventory",
        description: "Ensure all new stock is updated in the system.",
        date: "2024-12-01",
        category: "Inventory",
      },
      {
        active: true,
        newTask: false,
        complete: true,
        failed: false,
        title: "Product Review",
        description: "Analyze customer reviews for top-selling products.",
        date: "2024-11-22",
        category: "Analysis",
      },
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      complete: 1,
      failed: 0,
    },
  },
  {
    id: 3,
    firstname: "Kavya",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        complete: false,
        failed: false,
        title: "Code Review",
        description: "Review the pull requests from the dev team.",
        date: "2024-11-29",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        complete: true,
        failed: false,
        title: "Team Feedback",
        description: "Collect feedback from the team about the new tool.",
        date: "2024-11-18",
        category: "Feedback",
      },
      {
        active: false,
        newTask: false,
        complete: false,
        failed: true,
        title: "Bug Fixing",
        description: "Resolve critical bugs in the payment module.",
        date: "2024-11-15",
        category: "Development",
      },
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      complete: 1,
      failed: 1,
    },
  },
  {
    id: 4,
    firstname: "Diya",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        complete: false,
        failed: false,
        title: "Design Review",
        description: "Review the UI/UX design for the upcoming app.",
        date: "2024-11-30",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        complete: true,
        failed: false,
        title: "Content Creation",
        description: "Create content for the new marketing campaign.",
        date: "2024-11-23",
        category: "Marketing",
      },
    ],
    taskNumbers: {
      active: 1,
      newTask: 0,
      complete: 1,
      failed: 0,
    },
  },
  {
    id: 5,
    firstname: "Advika",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        complete: false,
        failed: false,
        title: "Event Planning",
        description: "Organize the annual employee engagement event.",
        date: "2024-12-05",
        category: "Event Management",
      },
      {
        active: false,
        newTask: false,
        complete: true,
        failed: false,
        title: "Vendor Coordination",
        description: "Coordinate with vendors for supplies.",
        date: "2024-11-28",
        category: "Operations",
      },
      {
        active: false,
        newTask: false,
        complete: false,
        failed: true,
        title: "Training Setup",
        description: "Prepare materials for the upcoming training session.",
        date: "2024-11-19",
        category: "Training",
      },
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      complete: 1,
      failed: 1,
    },
  },
];

const admin = [
  {
    id: 1,
    firstname: "Rohan",
    email: "admin@example.com",
    password: "123",
  },
];



  // localStorage.clear()
//   to save data in to the local storage
  export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
  }

//   to get data from local storage
  export const getLocalStorage=()=>{
  const employees =   JSON.parse(localStorage.getItem('employees'))
  const admin =   JSON.parse(localStorage.getItem('admin'))

  return(
    {employees, admin}
  )
    
  }
