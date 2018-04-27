import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const takeATours = [
        {
            index: 0,
            title: "Welcome to Trend Monitor",
            imageUrl: "assets/images/tour-guide/Penetrace-Logo.png",
            description: `A trend monitor reports all your research, online traffic, 
            sales and contextual data in one single dashboard solution. 
            In the next few steps we will guide you through how to use trend monitor. 
            The guided tour will only take 2-3 minutes of your time`
        },
        {
            index: 1,
            title: "Topics and Graphs",
            imageUrl: "assets/images/tour-guide/Topics_and_Graphs_Edit.gif",
            description: `Each Trend Monitor can be divided into different sections called topics. 
            This makes it easy to sort and arrange your graphs so you can easily and quickly find what you are looking for.`
        },
        {
            index: 2,
            title: "Time period",
            imageUrl: "assets/images/tour-guide/Time period_Edit.gif",
            description: 
            "Here you can choose from five default time periods (day, week, month, quarter or year). You can also set the time period manually by clicking on the date boxes and select which time period you want to see data for. Be aware that you don’t aggregate the data to the time period you selected, you only changes the x axis in the graph to show data for the latest day, week, month, quarter, year or the custom time period you set manually."   
        },
        {
            index: 3,
            title: "Topic Filter",
            imageUrl: "assets/images/tour-guide/Topic Filter_Edit.gif",
            description: 
            "Topic filter give you the opportunity to set a filter on all the graphs that contains perception data for one topic."
        },
        {
            index: 4,
            title: "Presentation View",
            imageUrl: "assets/images/tour-guide/Presentation View_Edit.png",
            description:
            "You can save a lot of time by using our presentation view, instead of spending hours preparing a Power Point or Key Note. Simply select the topic you want to view and click “Presentation View”."
        },
        {
            index: 5,
            title: "Create and Distribute Report",
            imageUrl: "assets/images/tour-guide/Create and Distribute Report_Edit.png",
            description: 
            "Here you can distribute a one time report or you can set up a schedule report. This report can easily be shared with other users that have access to the same brand area or you can insert email addresses and distribute the report directly from Penetrace."        
        },
        {
            index: 6,
            title: "Compact Print Format",
            imageUrl: "assets/images/tour-guide/Compact Print Format_Edit.png",
            description:
            "Compact print format gives you the option to print out a topic or you can save the topic as a PDF."            
        },
        {
            index: 7,
            title: "Get PPT file (by mail)",
            imageUrl: "assets/images/tour-guide/Get PPT file_Edit.png",
            description: 
            "In Penetrace you can easily generate a Power Point from a topic. Chose the topic from which you want to generate a Power Point, click on '/Get PPT file (by mail)'/. You will receive an e-mail with the report, as soon as it is generated (approximately 2-5 minutes)."  
        },
        {
            index: 8,
            title: "Export Data / Create Shareable Link",
            imageUrl: "assets/images/tour-guide/Create Shareable Link_Edit.png",
            description: 
            "With this option you can get hold of all the data from a monitor in a file available on a url. This means you can use this file if you want to insert data from Penetrace into a Google Sheets, or if you want to integrate with a external system. The file format is a structured XML- file."
        },
        {
            index: 9,
            title: "Create new",
            imageUrl: "assets/images/tour-guide/Create_Edit.gif",
            description: 
            "Click the “Create” button if you want to expand your trend monitor with a new topic or a new graph."
        },
        {
            index: 10,
            title: "Graph Settings",
            imageUrl: "assets/images/tour-guide/Graph settings_Edit.gif",
            description: 
            "To edit a graph in trend monitor you can click on graph settings and select edit. You can also download the results from a graph into an excel file and view the graph in presentation view or compact print format. If you want to download the graph as a picture you can choose between PNG, JPEG or SVG."
        },
        {
            index: 11,
            title: "Zoom",
            imageUrl: "assets/images/tour-guide/Zoom_Edit.gif",
            description: 
            "Each graph is interactive, so you can click, and zoom right in the graph to display a custom time period."
        },
        {
            index: 12,
            title: "Comment",
            imageUrl: "assets/images/tour-guide/Comment_Edit.gif",
            description: 
            "Every graph in Trend Monitor can be commented. Just click the data point you want to comment and choose comment from the right side of the graph."
        },
        {
            index: 13,
            title: "Legend",
            imageUrl: "assets/images/tour-guide/Legend_Edit.gif",
            description: 
            "A graph in Penetrace contains a main chart and a legend. All the data series in the graph are listed under each other in the legend. On the left side of each data series there are a color code who represent the data series in the main chart."
        },
        {
            index: 14,
            title: "Support",
            imageUrl: "assets/images/tour-guide/Support_Edit.gif",
            description: 
            `Our support area is full of “how to guides” if you are interested in learning more about how to use Trend Monitor. Here are some related “how to guides” to some of the steps you have gone through:
            <br/>↵<a href="https://penetrace.zendesk.com/hc/en-us/articles/205895089-How-to-Create-and-Distribute-Online-Reports-" target="_blank">Create and Distribute Report</a><br/>↵<a href="https://penetrace.zendesk.com/hc/en-us/articles/114094037011-How-to-share-data-from-a-Trend-Monitor" target="_blank">Create Shareable Link</a><br/>↵<a href="https://penetrace.zendesk.com/hc/en-us/articles/205895009-How-to-Create-a-New-Topic-" target="_blank">How to Create a New Topic?</a><br/> ↵<a href="https://penetrace.zendesk.com/hc/en-us/articles/204849136-How-to-Create-a-New-Graph-" target="_blank">How to Create a New Graph?</a><br/>↵If you have any questions regarding Penetrace please feel free to contact our support team on chat or send us a mail to <a href="javascript:void(0)">support@penetrace.com</a>.  <br/>`
        }
    ];
    return {takeATours};
  }
}