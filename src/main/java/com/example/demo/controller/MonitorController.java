package com.example.demo.controller;

import com.example.demo.model.MonitorOee;
import com.example.demo.model.MonitorProduction;
import com.example.demo.model.MonitorStoppage;
import com.example.demo.repository.MonitorOeeRepository;
import com.example.demo.repository.MonitorProductionRepository;
import com.example.demo.repository.MonitorStoppageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Controller
public class MonitorController {

    @Autowired
    private MonitorOeeRepository monitorOeeRepository;

    @Autowired
    private MonitorProductionRepository monitorProductionRepository;

    @Autowired
    private MonitorStoppageRepository monitorStoppageRepository;

    @GetMapping("/monitor")
    public String getMonitorData(Model model) {
        model.addAttribute("oeeList", monitorOeeRepository.findAll());
        model.addAttribute("productionList", monitorProductionRepository.findAll());
        model.addAttribute("stoppageList", monitorStoppageRepository.findAll());
        List<MonitorProduction> productionList = monitorProductionRepository.findAll();

        Map<String, Map<String, Double>> productionData = productionList.stream()
                .collect(Collectors.groupingBy(
                        p -> new SimpleDateFormat("MMMM").format(p.getProdDate()),
                        Collectors.groupingBy(MonitorProduction::getLineCode,
                                Collectors.summingDouble(MonitorProduction::getProdQuantity))
                ));

        model.addAttribute("productionData", productionData);
        return "monitor";
    }

}
