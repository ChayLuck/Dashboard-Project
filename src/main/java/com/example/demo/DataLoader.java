package com.example.demo;

import com.example.demo.model.MonitorOee;
import com.example.demo.model.MonitorProduction;
import com.example.demo.model.MonitorStoppage;
import com.example.demo.repository.MonitorOeeRepository;
import com.example.demo.repository.MonitorProductionRepository;
import com.example.demo.repository.MonitorStoppageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;

@Component
public class DataLoader implements CommandLineRunner {

    @Autowired
    private MonitorOeeRepository monitorOeeRepository;

    @Autowired
    private MonitorProductionRepository monitorProductionRepository;

    @Autowired
    private MonitorStoppageRepository monitorStoppageRepository;

    @Override
    public void run(String... args) throws Exception {
        monitorOeeRepository.save(new MonitorOee("HAT-1", "Birinci Hat", 0.75, 0.87, 0.90, 0.99));
        monitorOeeRepository.save(new MonitorOee("HAT-2", "İkinci Hat", 0.85, 0.95, 0.90, 0.80));

        SimpleDateFormat dateFormat = new SimpleDateFormat("ddMMyyyy");

        monitorProductionRepository.save(new MonitorProduction("HAT-1", dateFormat.parse("01012024"), 1250.0));
        monitorProductionRepository.save(new MonitorProduction("HAT-1", dateFormat.parse("01022024"), 1000.0));
        monitorProductionRepository.save(new MonitorProduction("HAT-1", dateFormat.parse("01032024"), 1500.0));
        monitorProductionRepository.save(new MonitorProduction("HAT-1", dateFormat.parse("01042024"), 1900.0));
        monitorProductionRepository.save(new MonitorProduction("HAT-1", dateFormat.parse("01052024"), 1180.0));
        monitorProductionRepository.save(new MonitorProduction("HAT-1", dateFormat.parse("01062024"), 1324.0));
        monitorProductionRepository.save(new MonitorProduction("HAT-1", dateFormat.parse("01072024"), 900.0));
        monitorProductionRepository.save(new MonitorProduction("HAT-2", dateFormat.parse("01012024"), 1450.0));
        monitorProductionRepository.save(new MonitorProduction("HAT-2", dateFormat.parse("01022024"), 1200.0));
        monitorProductionRepository.save(new MonitorProduction("HAT-2", dateFormat.parse("01032024"), 1800.0));
        monitorProductionRepository.save(new MonitorProduction("HAT-2", dateFormat.parse("01042024"), 2100.0));
        monitorProductionRepository.save(new MonitorProduction("HAT-2", dateFormat.parse("01052024"), 1080.0));
        monitorProductionRepository.save(new MonitorProduction("HAT-2", dateFormat.parse("01062024"), 1524.0));
        monitorProductionRepository.save(new MonitorProduction("HAT-2", dateFormat.parse("01072024"), 1100.0));

        monitorStoppageRepository.save(new MonitorStoppage("HAT-1", "Çay Molası", 30.0));
        monitorStoppageRepository.save(new MonitorStoppage("HAT-1", "Küçük Duruşlar", 120.0));
        monitorStoppageRepository.save(new MonitorStoppage("HAT-1", "Malzeme Yok", 140.0));
        monitorStoppageRepository.save(new MonitorStoppage("HAT-1", "Arıza", 65.0));
        monitorStoppageRepository.save(new MonitorStoppage("HAT-2", "Çay Molası", 30.0));
        monitorStoppageRepository.save(new MonitorStoppage("HAT-2", "Küçük Duruşlar", 67.0));
        monitorStoppageRepository.save(new MonitorStoppage("HAT-2", "Bakım", 180.0));
        monitorStoppageRepository.save(new MonitorStoppage("HAT-2", "Arıza", 15.0));
    }
}
