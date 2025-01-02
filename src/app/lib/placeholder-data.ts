
const users = [
    {
        id: '410544b2-4001-4271-9855-fec4b6a6442a',
        name : "admin",
        password : "admin123admin",
    },
];

const exchange = [
    {
        id : 1,
        dolar : "14700",
    },
];

const categories = [
    {
        id : 1,
        name : "جداريات",
    },
    {
        id : 2,
        name : "أرضيات",
    },
    {
        id : 3,
        name : "أعمدة",
    },
    {
        id : 4,
        name : "مواد بناء",
    },
    {
        id : 5,
        name : "أصبغة",
    },
];

const dashboard = [
    { id: '/dashboard/products/addProduct', label: 'إضافة منتج' , color : '#4ECCC3'  },
    { id: '/dashboard/products', label: 'جدول المنتجات' , color : '#004572'  },
    { id: '/dashboard/exchange', label: 'تعديل سعر الصرف' , color : '#c1121f' },
    { id: '/dashboard/sizes/addSize', label: 'إضافة قياس ' , color : '#4ECCC3'},
    { id: '/dashboard/sizes', label: ' جدول القياسات ' , color : '#004572'},
];

const expenses = [
    { id: '/dashboard/expenses/addExpenses', label: 'إضافة مصاريف دورية' , color : '#4ECCC3'},
    { id: '/dashboard/expenses', label: ' جدول المصاريف الدورية' , color : '#004572'},
    { id: '/dashboard/expenses/statistics', label: ' إحصائيات المصاريف الدورية' , color : '#F97E1F'},
];

const invoice = [
    { id: '/dashboard/purchases/addPurchase', label: 'إضافة فاتورة شراء' , color : '#4ECCC3' },
    { id: '/dashboard/purchases', label: ' جدول فواتير الشراء' , color : '#004572' },
    { id: '/dashboard/purchases/statistics', label: ' إحصائيات فواتير الشراء' , color : '#F97E1F' },
    { id: '/dashboard/sales/addSales', label: 'إضافة فاتورة مبيع' , color : '#4ECCC3'},
    { id: '/dashboard/sales', label: ' جدول فواتير المبيع' , color : '#004572'},
    { id: '/dashboard/sales/statistics', label: ' إحصائيات فواتير المبيع' , color : '#F97E1F'},
];

const buyers = [
    { id: '/dashboard/buyers/addBuyer', label: 'إضافة زبون' , color : '#4ECCC3'},
    { id: '/dashboard/buyers', label: '  جدول الزبائن' , color : '#004572'},
    { id: '/dashboard/buyers/settlingAnAccount', label: '  تسديد حساب زبون' , color : '#666'},
];

const sellers = [
    { id: '/dashboard/sellers/addSeller', label: 'إضافة مورّد' , color : '#4ECCC3'},
    { id: '/dashboard/sellers', label: ' جدول الموردون' , color : '#004572'},
    { id: '/dashboard/sellers/settlingAnAccount', label: ' تسديد حساب مورّد' , color : '#666'},
];

const expensesType = [
    {name : "أبو حمزة"},
    {name : " مساعدة موظف"},
    {name : "رواتب"},
    {name : "مستلزمات للمعمل"},
    {name : "شاي + سكر"},
    {name : "صدقة"},
    {name : "تصليح"},
    {name : "طعام"},
    {name : "كهرباء"},
    {name : "إجرة سيارة / نقل"},
];

export { users, exchange, categories , dashboard , invoice , buyers , sellers , expensesType , expenses };
