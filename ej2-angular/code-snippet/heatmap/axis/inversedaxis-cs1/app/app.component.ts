


import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'my-app',
    template:
       `<ejs-heatmap id='container' style="display:block;" [dataSource]='dataSource' [xAxis]='xAxis' [yAxis]='yAxis'
       [titleSettings]='titleSettings' [legendSettings]='legendSettings' [cellSettings]='cellSettings'>
        </ejs-heatmap>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{

dataSource: Object [] = [
            [36371, 25675, 28292, 33399, 35980, 38585, 39351, 39964, 36543, 30529, 33298, 36985],
            [34702, 27618, 31063, 34525, 36772, 35410, 38750, 39467, 35390, 34196, 35302, 35703],
            [34522, 31324, 32128, 34231, 36817, 34381, 37180, 38255, 32776, 32645, 31539, 32981],
            [32213, 28755, 29517, 31214, 33747, 33507, 35763, 36837, 32910, 33437, 30659, 31965],
            [31282, 28663, 32952, 33941, 34506, 36875, 38836, 35497, 34285, 34094, 32256, 33699],
            [31714, 29405, 33745, 32838, 33461, 35034, 36122, 37943, 34128, 30624, 32398, 33522],
            [32064, 28387, 33751, 32537, 34034, 35977, 37196, 38301, 33627, 34115, 31072, 33939],
            [32417, 27868, 30807, 33386, 35284, 36126, 39753, 40978, 35777, 35277, 31281, 35411],
            [32494, 29848, 34385, 35804, 37943, 38722, 41315, 41335, 37177, 37443, 32457, 37304],
            [34378, 29576, 30547, 35664, 36622, 38145, 40347, 41868, 38252, 36505, 29576, 36450],
            [35219, 31670, 32589, 34927, 36998, 39825, 41126, 42002, 37021, 36583, 32408, 37108]
        ];

        titleSettings: Object = {
            text: 'Monthly Flight Traffic at JFK Airport',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'Segoe UI'
            }
        };
        xAxis: Object = {
            valueType:"DateTime",
            minimum: new Date(2007,0,1),
            maximum: new Date(2017,0,1),
            intervalType:"Years",
            labelFormat:"yyyy",
            labelRotation: 45,
            labelIntersectAction: 'None',
            isInversed:true
        };
        yAxis: Object = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May',
                'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        };
        public legendSettings: Object = {
            visible: false,
        };
        public cellSettings: Object = {
            showLabel: false,
            border: {
                width: 0,
            },
            format: '{value} flights'
        };
}



