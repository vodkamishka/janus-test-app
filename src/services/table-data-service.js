export default class dataTableService {

    getColumnsNames = () => {
        return [
            { id: 1, name: 'Budget name' },
            { id: 2, name: 'PO number' },
            { id: 3, name: 'Amount total, $' },
            { id: 4, name: 'Amount remaining, $' },
            { id: 5, name: 'Created at' },
            { id: 6, name: 'Projects' },
        ]
    }

    getData = () => {
        return [
            { id: 1, budgetName: 'For transition operation', POnumber: '9846-12-3254', amountTotal: 1500.00, amountRemaining: 1487.00, createdAt: '10 jul 2019, 16:48', projects: [{id:345, name: 'Project 2345 - manual translation'},  {id: 346, name: 'Project 1128 - ubersetzung'}] },
            { id: 2, budgetName: 'New budgets for all primary tasks', POnumber: '6548947515', amountTotal: 20680.00, amountRemaining: 21946.65, createdAt: '8 mar 2018, 14:02', projects: [{id: 347, name: 'Project 295 - manual translation'}, {id: 348, name : 'Project 1504 - ubersetzung'}] },
            { id: 3, budgetName: 'Documents and secure data budget', POnumber: '9546877-3246', amountTotal: 9150.00, amountRemaining: 3546.33, createdAt: '12 apr 2019, 8:32', projects: [{id: 350, name: 'Project 1365 - manual translation'}] },
            { id: 4, budgetName: 'Exelltable with marceting', POnumber: '234566-12-3254', amountTotal: 37890.00, amountRemaining: 15000.00, createdAt: '18 dec 1982, 01:48', projects: [{id:351, name: 'Project 1111 - manual translation'},  {id: 352, name: 'Project 1790 - der himel'}] },
            { id: 5, budgetName: 'Plutarc pliniy mladshiy iosif flaviy', POnumber: '456677', amountTotal: 25180.00, amountRemaining: 111.60, createdAt: '18 may 2018, 02:01', projects: [{id: 353, name: 'Project 12 - manual transaction'}, {id: 354, name : 'Project 3333 - ahtung'}] },
            { id: 6, budgetName: 'Documents abount second world war', POnumber: '906533222', amountTotal: 13000.00, amountRemaining: 33546.33, createdAt: '12 jun 1888, 18:55', projects: [{id: 355, name: 'Project 4567 - manual consultation'}, {id: 356, name: 'Project 14567767 - manual transcription'}, {id: 357, name: 'Project 4567566 - manual conversation'}] },
            { id: 7, budgetName: 'Ahtung Antung waterpall', POnumber: '45867900-0', amountTotal: 45678.00, amountRemaining: 5678.00, createdAt: '23 jul 2009, 17:20', projects: [{id:358, name: 'Project 234565645 - manual translation'},  {id: 359, name: 'Project 11245668 - ubersetzung'}] },
            { id: 8, budgetName: 'Lorem Ipsum frotyr', POnumber: '3456457588', amountTotal: 1200.00, amountRemaining: 12678.65, createdAt: '7 nov 218, 04:44', projects: [{id: 360, name: 'Project 360 - pliniy dersert'}, {id: 361, name : 'Project 54099876 - ubersetzung'}] },
            { id: 9, budgetName: 'I think that all of you need', POnumber: '68898908', amountTotal: 789.00, amountRemaining: 17890.33, createdAt: '12 apr 2019, 8:32', projects: [{id: 362, name: 'Project 61365655 - belissimo manual translation'}, {id: 363, name: 'Project 55- transaxtion'}, {id: 364, name: 'Project 1234 - plutarch all your mind'}] },
            { id: 10, budgetName: 'Symphony december algoritm', POnumber: '234566-12-324555566', amountTotal: 8905.00, amountRemaining: 3456.00, createdAt: '10 dec 1933, 01:48', projects: [{id:365, name: 'Project 567 - manual translation'},  {id: 366, name: 'Project 567678 - der himel'}] },
            { id: 11, budgetName: 'We will make all tests', POnumber: '751556667-0-0', amountTotal: 32567.00, amountRemaining: 47000.60, createdAt: '18 may 2018, 02:01', projects: [{id: 367, name: 'Project 125677 - manual tranz transaction'}, {id: 368, name : 'Project 33333 - ahtung der gustan'}] },
            { id: 12, budgetName: 'Document about aforism', POnumber: '45676778888890-1', amountTotal: 27000.00, amountRemaining: 9876.33, createdAt: '22 may 1900, 08:51', projects: [{id: 370, name: 'Project 67 - prototype ivent'}] },
            { id: 13, budgetName: 'Word Exell Paint React Redux', POnumber: '9846-1256777-3254', amountTotal: 6000.00, amountRemaining: 8934.00, createdAt: '01 jul 1700, 15:33', projects: [{id:372, name: 'Project 236745 - manual translation evil'},  {id: 373, name: 'Project 11128 - aopem you mindubersetzung'}] },
            { id: 14, budgetName: 'Javascript php java c++ assembler', POnumber: '55565489475155555', amountTotal: 200.00, amountRemaining: 12345.65, createdAt: '8 mar 1888, 14:54', projects: [{id: 374, name: 'Project 29556767 - rert manual translation'}, {id: 375, name : 'Project 45666 - zalcburg'}] },
            
        ]
    }
}