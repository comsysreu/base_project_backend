import { Controller, Get, Post, Put, Body, Req, Param, Delete } from '@nestjs/common';
import { ReportsService } from './reports.service';

import { CreateReportsDto } from './dto/create-reports.dto';
import { Reports } from './interface/reports.interface';


@Controller('api/reports')
export class ReportsController {
    // constructor(private readonly reportService: ReportsService) { }
    constructor() { }

    @Get()
    async findAll(@Req() request) {
        console.log("HEADERS: ", request.headers);
        console.log("******************************************");
        console.log("RAW-HEADERS: ", request.rawHeaders);
        console.log("******************************************");
        console.log("METHOD: ", request.method);
        console.log("******************************************");
        console.log("PARAMS: ", request.params);
        console.log("******************************************");
        console.log("QUERY: ", request.query);
        console.log("******************************************");
        console.log("BODY: ", request.body);
        console.log("******************************************");
        console.log("ROUTE: ", request.route);        
        console.log("******************************************");
        console.log("******************************************");
        console.log("******************************************");
        return "Endpoint response method GET";
    }

    @Get(':id')
    async findById(@Req() request) {
        console.log("HEADERS: ", request.headers);
        console.log("******************************************");
        console.log("RAW-HEADERS: ", request.rawHeaders);
        console.log("******************************************");
        console.log("METHOD: ", request.method);
        console.log("******************************************");
        console.log("PARAMS: ", request.params);
        console.log("******************************************");
        console.log("QUERY: ", request.query);
        console.log("******************************************");
        console.log("BODY: ", request.body);
        console.log("******************************************");
        console.log("ROUTE: ", request.route);        
        console.log("******************************************");
        console.log("******************************************");
        console.log("******************************************");        
        return "Endpoint response method GET BY ID"
    }

    @Post()
    async create(@Req() request) {
        console.log("HEADERS: ", request.headers);
        console.log("******************************************");
        console.log("RAW-HEADERS: ", request.rawHeaders);
        console.log("******************************************");
        console.log("METHOD: ", request.method);
        console.log("******************************************");
        console.log("PARAMS: ", request.params);
        console.log("******************************************");
        console.log("QUERY: ", request.query);
        console.log("******************************************");
        console.log("BODY: ", request.body);
        console.log("******************************************");
        console.log("ROUTE: ", request.route);        
        console.log("******************************************");
        console.log("******************************************");
        console.log("******************************************");
        return "Endpoint response method POST";
    }

    @Put()
    async update(@Req() request) {
        console.log("HEADERS: ", request.headers);
        console.log("******************************************");
        console.log("RAW-HEADERS: ", request.rawHeaders);
        console.log("******************************************");
        console.log("METHOD: ", request.method);
        console.log("******************************************");
        console.log("PARAMS: ", request.params);
        console.log("******************************************");
        console.log("QUERY: ", request.query);
        console.log("******************************************");
        console.log("BODY: ", request.body);
        console.log("******************************************");
        console.log("ROUTE: ", request.route);        
        console.log("******************************************");
        console.log("******************************************");
        console.log("******************************************");        
        return "Endpoint response method PUT";
    }

    @Delete(':id')
    async delete(@Req() request) {
        console.log("HEADERS: ", request.headers);
        console.log("******************************************");
        console.log("RAW-HEADERS: ", request.rawHeaders);
        console.log("******************************************");
        console.log("METHOD: ", request.method);
        console.log("******************************************");
        console.log("PARAMS: ", request.params);
        console.log("******************************************");
        console.log("QUERY: ", request.query);
        console.log("******************************************");
        console.log("BODY: ", request.body);
        console.log("******************************************");
        console.log("ROUTE: ", request.route);        
        console.log("******************************************");
        console.log("******************************************");
        console.log("******************************************");   
        return "Endpoint response method DELETE";
    }

}
