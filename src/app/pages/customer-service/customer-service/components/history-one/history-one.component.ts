import { Component, OnInit, ChangeDetectionStrategy, ViewChild, AfterViewInit } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
import { BaseComponent } from '@root/shared/components/base-component/base-component';
import { WidgetTableComponent } from '@root/shared/components/widget-table/widget-table.component';
import { BaseListItem } from '@root/shared/models/base-list-item.model';
import { TableColumnFilterDataType } from '@root/shared/models/table/enum/table-column-filter-data-type.enum';
import { Filter } from '@root/shared/models/table/filter.model';
import { TableColumn } from '@root/shared/models/table/table-column.model';
import { TableConfiguration } from '@root/shared/models/table/table-configuration.model';
import { TableRowAction } from '@root/shared/models/table/table-row-action.model';
import { TableSettings } from '@root/shared/models/table/table-settings.model';
import { TicketHistoryListItem } from '../../models/ticket-history-list-item.model';;

@Component({
  selector: 'app-history-one',
  templateUrl: './history-one.component.html',
  styleUrls: ['./history-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryOneComponent extends BaseComponent implements OnInit, AfterViewInit {

  @ViewChild(WidgetTableComponent)
  table: WidgetTableComponent<TicketHistoryListItem>;
  pageSize = 3;
  pageIndex = 1;
  filter: Filter[];
  entityTypesList: BaseListItem[] = [
    { id: '1', name: 'type1' },
    { id: '1', name: 'type2' }
  ];
  happyIcon: TableRowAction<TicketHistoryListItem> = {
    action: (data) => this.onEntityEdited(data),
    cssClasses: 'text-primary',
    iconName: 'edit',
    translationKey: '',
    alwaysShow: true,
    showConditionProperty: null,
    isIconButton: true,
  };
  entitiesList: TicketHistoryListItem[] = [
    {
      Date: 'opoj',
      employeeName: '222',
      Response: "edit"
    },
    {
      Date: 'opoj',
      employeeName: '222',
      Response: "edit"
    },
    {
      Date: 'opoj',
      employeeName: '222',
      Response: "edit"
    },
    {
      Date: 'opoj',
      employeeName: '222',
      Response: "edit"
    },
  ]
  tableColumns: TableColumn[] = [
    {
      translationKey: 'Date',
      property: 'Date',
      type: 'text',
      svgIcon: '',
      cssClasses: () => '',
      dataCssClasses: () => 'underline text-accent',
      enableSort: true,
      hasFilter: true,
      visible: true,
      displayInFilterList: false,

      hasToolTip: false,
      showText: true,
      filter: {
        filterType: TableColumnFilterDataType.Text
      }
    },
    {
      translationKey: 'employeeName',
      property: 'employeeName',
      type: 'text',
      cssClasses: () => '',
      dataCssClasses: () => '',
      enableSort: true,
      hasFilter: true,
      visible: true,
      displayInFilterList: true,
      hasToolTip: false,
      showText: true,
      filter: {
        filterType: TableColumnFilterDataType.Text
      }
    },
    {
      translationKey: 'Response',
      property: 'Response',
      type: 'text',
      svgIcon: 'edit',
      cssClasses: () => 'text-primary',
      dataCssClasses: () => '',
      enableSort: true,
      hasFilter: true,
      visible: true,
      displayInFilterList: true,
      hasToolTip: false,
      showText: true,
      filter: {
        filterType: TableColumnFilterDataType.Text
      },
    },
    
  ];

 
  editAction: TableRowAction<TicketHistoryListItem> = {
    action: (data) => this.onEntityEdited(data),
    cssClasses: 'text-primary',
    iconName: 'edit',
    translationKey: '',
    alwaysShow: true,
    showConditionProperty: null,
    isIconButton: true,
  };

  viewAction: TableRowAction<TicketHistoryListItem> = {
    action: (data) => this.onEntityViewed(data),
    cssClasses: 'text-primary',
    iconName: 'visibility',
    translationKey: '',
    alwaysShow: true,
    showConditionProperty: null,
    isIconButton: true,
  };

  deleteAction: TableRowAction<TicketHistoryListItem> = {
    action: (data) => this.onEntityDeleted(data),
    cssClasses: 'text-primary',
    iconName: 'delete',
    translationKey: '',
    alwaysShow: true,
    showConditionProperty: null,
    isIconButton: true,
  };

  lockAction: TableRowAction<TicketHistoryListItem> = {
    action: (data) => this.onEntityLocked(data),
    cssClasses: 'text-primary',
    iconName: 'lock',
    translationKey: '',
    alwaysShow: true,
    showConditionProperty: null,
    isIconButton: true,
  };

  tableSettings = new TableSettings({ actionsMode: 'inline', pageSize: this.pageSize });

  tableConfiguration: TableConfiguration<TicketHistoryListItem> = {
    tableRowsActionsList: [this.viewAction, this.editAction, this.deleteAction, this.lockAction],
    columns: this.tableColumns,
    data: [],
    dataCount: 0,
    settings: this.tableSettings,
  };

  constructor() { super(); }


  ngOnInit(): void {
    this.tableConfiguration.data = this.entitiesList;
    this.tableConfiguration.dataCount = this.entitiesList.length;
  }

  ngAfterViewInit(): void {
    this.table.refresh();
  }

  onEntityEdited(_category: TicketHistoryListItem) {
    
  }

  onEntityViewed(_category: TicketHistoryListItem) {

  }

  onEntityDeleted(_category: TicketHistoryListItem) {

  }

  onEntityLocked(_category: TicketHistoryListItem) {
  
  }
}
